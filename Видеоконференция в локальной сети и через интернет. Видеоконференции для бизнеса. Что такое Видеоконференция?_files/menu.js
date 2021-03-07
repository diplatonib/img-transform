'use strict';

(function ($) {
    // var imkt = window.imkt ? window.imkt : (window.imkt = {});
    var imkt = window.imkt || (window.imkt = {});
    imkt.core = {
        init: function init(domRoot) {
            var self = this;

            this.featureDetect();

            $("script[type='text/x-component']", domRoot).each(function (i, elem) {
                var componentInfo = $.parseJSON($.trim(elem.innerHTML)),
                    componentRoot = elem.parentNode;
                self.componentInit.call(self, componentRoot, componentInfo);
            });
            $(document).trigger("appInitialized");
            this.appInitialized = true;
        },
        featureDetect: function featureDetect() {
            var bodyClasses = [];
            if (!this.supports.backgroundSize()) {
                bodyClasses.push("no-backgroundsize");
            }
            if (!this.supports.flexBox()) {
                bodyClasses.push("no-flexbox");
            }
            $("body").addClass(bodyClasses.join(" "));
        },
        extend: function extend(supertype, subtype, overrides) {
            var ctor = function ctor() {},
                name;
            ctor.prototype = supertype.prototype;
            subtype.prototype = new ctor();
            for (name in overrides) {
                subtype.prototype[name] = overrides[name];
            }
            subtype.prototype.constructor = supertype;
        },
        resolve: function resolve(str, createIfNotExists) {
            var basis = window;
            if (!str) {
                return null;
            } else if (typeof str === "function") {
                return str;
            } else {
                var last = basis,
                    names = str.split("."),
                    name,
                    i,
                    j;
                for (i = 0, j = names.length; i < j; i++) {
                    name = names[i];
                    basis = basis[name];
                    if (!basis) {
                        if (createIfNotExists) {
                            basis = last[name] = {};
                        } else {
                            return null;
                        }
                    }
                    last = basis;
                }
            }
            return basis;
        },

        componentInit: function componentInit(componentRoot, componentInfo) {
            var componentType = this.resolve(componentInfo.type);
            if (componentType) {
                return new componentType(componentRoot, $.extend({}, componentInfo.params, $(componentRoot).data()));
            } else {
                // could not find component
            }
        },
        supports: {
            flexBox: function flexBox() {
                return "flexWrap" in document.documentElement.style || "webkitFlexWrap" in document.documentElement.style;
            },
            history: function history() {
                return window.history && window.history.pushState;
            },
            svg: function svg() {
                return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
            },
            backgroundSize: function backgroundSize() {
                return "backgroundSize" in document.documentElement.style;
            },
            touch: function touch() {
                return "ontouchstart" in window;
            },
            placeholder: function placeholder() {
                var i = document.createElement("input");
                return "placeholder" in i;
            }
        },
        is: {
            mobile: function mobile() {
                return imkt.core.supports.touch() && screen.width && screen.width < 768;
            }
        }
    };

    // main entry point for the application
    $(document).ready(function () {
        if (!$("body").hasClass("edit")) {
            imkt.core.init(document.body);
        }

        // Bug 47665 - add active for blog
        if (window.location.pathname.match('^\/blog/')) {
           $('.global-nav--wac__link-top__blog-link').addClass('global-nav--wac__link-top__active-link-menu');
        }

        var menuParentDiv = document.querySelector('.global-nav--wac');
        var menuPages = document.querySelectorAll('.c--nav-dropdown');
        menuParentDiv.addEventListener('click', function(e) {
            if (e.path[4].tagName === 'A') {
                $('.overlay--global-nav').removeClass('active');
                menuPages.forEach(function(e) {
                    e.classList.remove('active')
                })
            }
        })
    });

    $.fn.onThrottled = function (eventName, callback, threshold) {
        var timeout;
        this.on(eventName, function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                callback(e);
            }, threshold || 100);
        });
        return this;
    };

    imkt.wpl = imkt.wpl || {};

    imkt.wpl.globalNavigation = function (domRoot, params) {
        this.$domRoot = domRoot, this.params = $.extend({}, {}, params);

        this.$header = $('.header--wac');
        this.$globalNav = $('.global-nav--wac');
        this.$globalNavLogo = $('.global-nav--wac__logo');
        this.$globalNavTitle = $('.global-nav--wac__title');
        this.$dropdown = $('.c--nav-dropdown');
        this.$dropdownContent = $('.c--nav-dd__content');
        this.mobileBreakpoint = 724; // tied to css
        this.dropdownSpeed = 500; // tied to css
        this.dropdownSpeedFast = 250; // tied to css
        this.canClickDropdown = true;
        this.isCurrentlyMobile = false;

        this.classNames = {
            mobileMenuOpenClass: 'mobile-imkt--open',
            overlayOpenClass: 'overlay--open',
            overlayClass: '.overlay--global-nav',
            headerlessNavbarClass: '.headerless-nav .imkt-navbar__link-list-link--dropdown-trigger',
            globalNavBackArrowClass: '.global-nav--wac__back-arrow',
            menuToggleClass: '.global-nav--wac__menu-toggle',
            dropdownLinksClass: '.global-nav--wac__link.has-dropdown a',
            dropdownCloseClass: '.c--nav-dd__close',
            dropdownClass: '.c--nav-dropdown',
            dropdownOpenClass: 'dropdown--open',
            slideInClass: 'slide-in--active',
            logoInactiveClass: 'inactive',
            profileToggleClass: '.user-profile-toggle',
            profileOpenClass: 'login-modal'
        };
        this.loginLabels = this.params.loginLabels;
        this.init();
    };

    imkt.wpl.globalNavigation.prototype = {
        init: function init() {
            this.setEnvironmentState();
            this.setLayoutState();
            this.addOverlay();
            this.bindEvents();
        },

        bindEvents: function bindEvents() {
            var self = this;
            $(window).onThrottled('resize', function (e) {
                var windowHeight = $(window).height();
                if (self.hasChangedLayout()) {
                    self.closeMobileMenu();
                    self.closeDropdown();
                    self.showLogo();
                }
                if (self.isMobileLayout() && self.isMobileMenuOpen()) {
                    self.setHeaderHeight();
                }
                self.setLayoutState();
            });

            // $(document).on('click', self.classNames.profileToggleClass, function (e) {
            //     e.preventDefault();
            //     self.closeMobileMenu();
            //     self.closeDropdown();
            // });

            $(document).on('click', self.classNames.menuToggleClass, function (e) {
                e.preventDefault();
                self.isMobileMenuOpen() ? self.closeMobileMenu() : self.openMobileMenu();
                self.closeDropdown();
                self.isMobileDropdownOpen() ? self.hideLogo() : self.showLogo();
                self.showOverlay();
                self.isMobileMenuOpen() ? $('body').addClass(self.classNames.overlayOpenClass) : $('body').removeClass(self.classNames.overlayOpenClass);
            });

            $(document).on('click', self.classNames.dropdownLinksClass, function (e) {
                e.preventDefault();
                if (!self.canClickDropdown) {
                    return;
                }
                self.canClickDropdown = false;
                var dropdownId = $(this).data('dropdown-id');
                var $dropdownContent = $('#' + dropdownId);
                var isDropdownHidden = !$dropdownContent.hasClass('active');

                $(self.classNames.dropdownLinksClass).removeClass('selected');
                $('[id^=dropdown-]').removeClass('active');
                $('body').addClass(self.classNames.overlayOpenClass);

                if (isDropdownHidden) {
                    self.openDropdown(this);
                } else {
                    self.closeDropdown();
                }

                if (self.isMobileLayout()) {
                    self.hideLogo();
                    self.addTitle($(this));
                    self.dropdownSlideIn();
                }
            });

            $(document).on('click touchstart', self.classNames.overlayClass, function () {
                self.closeDropdown();
            });

            $(document).on('click touchstart', self.classNames.headerlessNavbarClass, function () {
                self.closeDropdown();
            });

            $(document).on('click', self.classNames.dropdownCloseClass, function (e) {
                e.preventDefault();
                self.closeDropdown();

                self.closeMobileMenu();
            });

            $(document).on('click', self.classNames.globalNavBackArrowClass, function (e) {
                e.preventDefault();
                self.closeDropdown();
                self.showLogo();
            });

            $(document).on('click', '.toggle-excess-sites', function (e) {
                e.preventDefault();
                self.showExcessSites();
            });
        },

        getEnvironment: function getEnvironment() {
            var ENV_DEV = 'dev';
            var ENV_STAGING = 'staging';
            var ENV_PRODUCTION = 'production';

            var env = ENV_PRODUCTION;
            var hostname = window.location.hostname.split('.')[0];

            switch (hostname) {
                case 'qa-wac':
                    env = ENV_STAGING;
                    break;
                case 'localhost':
                    env = ENV_DEV;
                    break;
                default:
                    env = ENV_PRODUCTION;
            }
            return env;
        },

        hasChangedLayout: function hasChangedLayout() {
            return this.isCurrentlyMobile !== this.isMobileLayout();
        },

        isMobileLayout: function isMobileLayout() {
            return $(window).width() <= this.mobileBreakpoint;
        },

        isMobileMenuOpen: function isMobileMenuOpen() {
            return this.$globalNav.hasClass('active');
        },

        setLayoutState: function setLayoutState() {
            this.isCurrentlyMobile = this.isMobileLayout();
        },

        addOverlay: function addOverlay() {
            $('body').prepend('<div class="overlay--global-nav"></div>');
            this.overlay = $(this.classNames.overlayClass);
        },

        openMobileMenu: function openMobileMenu() {
            $('html, body').addClass(this.classNames.mobileMenuOpenClass);
            this.$globalNav.addClass('active');
            this.$header.addClass('active');
            this.setHeaderHeight();
        },

        closeMobileMenu: function closeMobileMenu() {
            $('html, body').removeClass(this.classNames.mobileMenuOpenClass);
            this.$globalNav.removeClass('active');
            this.$header.removeClass('active');
            this.resetHeaderHeight();
            this.deselectLinks();
        },

        showOverlay: function showOverlay() {
            this.overlay.addClass('active');
        },

        hideOverlay: function hideOverlay() {
            this.overlay.removeClass('active');
        },

        openDropdown: function openDropdown(dropdownLink) {
            $(dropdownLink).addClass('selected');
            var dropdownId = $(dropdownLink).data('dropdown-id');
            var $dropdown = $('#' + dropdownId);
            $dropdown.addClass('active');
            setTimeout(function () {
                $('html, body').addClass(this.classNames.dropdownOpenClass);
                this.canClickDropdown = true;
            }.bind(this), this.dropdownSpeed);
            this.showOverlay();
        },

        closeDropdown: function closeDropdown(dropdownLink) {
            $(this.classNames.dropdownClass).removeClass('active');
            setTimeout(function () {
                // $('html, body').removeClass(this.classNames.overlayOpenClass);
                this.canClickDropdown = true;
            }.bind(this), this.dropdownSpeedFast);
            $('html, body').removeClass(this.classNames.dropdownOpenClass);
            this.hideOverlay();
            this.deselectLinks();
            this.dropdownRemoveSlideIn();
        },

        hideLogo: function hideLogo() {
            this.$globalNavLogo.addClass(this.classNames.logoInactiveClass);
        },

        showLogo: function showLogo() {
            this.$globalNavLogo.removeClass(this.classNames.logoInactiveClass);
        },

        addTitle: function addTitle($dropdownText) {
            var self = this;
            self.$globalNavTitle.text($dropdownText.text());
        },

        isMobileDropdownOpen: function isMobileDropdownOpen() {
            return this.$dropdown.hasClass('active');
        },

        dropdownSlideIn: function dropdownSlideIn() {
            if (this.isMobileLayout()) {
                this.$globalNav.addClass(this.classNames.slideInClass);
            }
        },

        dropdownRemoveSlideIn: function dropdownRemoveSlideIn() {
            if (this.isMobileLayout()) {
                this.$globalNav.removeClass(this.classNames.slideInClass);
            }
        },

        setHeaderHeight: function setHeaderHeight() {
            this.$header.css({ 'height': $(window).height() + 'px' });
        },

        resetHeaderHeight: function resetHeaderHeight() {
            this.$header.css({ 'height': '' });
        },

        deselectLinks: function deselectLinks() {
            $(this.classNames.dropdownLinksClass).removeClass('selected');
        },

        setEnvironmentState: function setEnvironmentState() {
            this.env = this.getEnvironment();
        }
    };
})(jQuery);
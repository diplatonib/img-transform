/*!
	Colorbox 1.5.14
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),I=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(I).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,F,I,R,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&I.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);

/* Add colorbox handler*/
$('.colorbox-images a, a.colorbox-separate').each(function(){
    $(this).append('<span></span>');
    if(!$(this).attr("rel")){
        $(this).attr("rel", "colorbox-separate");
    }
});

$('.colorbox-images a, a.colorbox-separate').colorbox({
    transition: 'elastic',
    scalePhotos: true,
    preloading: true,
    scrolling: false,
    maxWidth: screen.availWidth-200+'px',
    maxHeight:screen.availHeight-100+'px',
    opacity: 0.25,
    next: 'next&nbsp;<span></span>',
    previous: '<span></span>&nbsp;previous',
    close: 'close&nbsp;<span></span>',
    current: 'Photo&nbsp;<span>{current}</span>/{total}'
});
(function(window, $){
    var mainSlider = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
    };
    
    mainSlider.prototype = {
        defaults: {
            timeout_for_first_slide: 30000,
            timeout: 10000,
            slideshow: true,
            speed: 600,
            wrapper: true,
            wrapper_control: '.wrapper',
            slidesCount: 1,
            slidesWidth: 992,
            is_ru: $('.lang_ru>div').length > 1,
            is_en: $('.lang_en>div').length > 1,
            lock_animate: false,
            timeout_id: -1,
//            wrapper_control: '',
            mobile: {
                init: false,
                width: 992,
                wrapper_control: ''
            },
            desktop:{
                init: true
            },
            autoHeight: true,
            addShowMore: false
        },
        init: function(){
            var _this = this;
            _this.config = $.extend({}, _this.defaults, _this.options);
            _this.config.slidesCount = _this.$elem.find('.slide').length;
            if(!_this.config.slideshow){
                _this.config.timeout_for_first_slide = 999999999;
                _this.config.timeout = 999999999;
            }
            if(_this.config.wrapper){
                _this.config.slidesWidth = _this.$elem.find(_this.config.wrapper_control).width();
            }else{
                _this.config.slidesWidth = _this.$elem.width();
            }
            _this.$elem.find('.slides_wrapper').css('width', parseInt(_this.config.slidesWidth, 10)*(parseInt(_this.config.slidesCount, 10)+1)+'px');
            _this.$elem.find('.slide').css('width', _this.config.slidesWidth+'px');
            if(_this.config.desktop.init){
                _this.$elem.append('<div class="control-l"></div><div class="control-r"></div>');
                var posControl = Math.abs((parseInt($('body').width(), 10) - parseInt(_this.$elem.find('.wrapper').width(), 10))/2 - 100);
                _this.$elem.find('.control-r').css('right', posControl+'px');
                _this.$elem.find('.control-l').css('left', posControl+'px');
            }
            if(_this.config.mobile.init){
                if(_this.config.mobile.wrapper_control != ''){
                    _this.$elem.find(_this.config.mobile.wrapper_control).each(function(index, value){
                        var html = $(this).html();
                        $(this).html('<div class="mobile-control-l"></div>'+html+'<div class="mobile-control-r"></div>');
                    });
                }
            }
            var h = _this.$elem.find('.slide:eq(0)').outerHeight();
            if(!_this.config.autoHeight){
                if(_this.config.addShowMore){
                    var textH = parseInt(_this.$elem.find('.slide:eq(0)').find('.block-right > .text').height(), 10);
                    for(var i = 0; i < _this.$elem.find('.slide').length; i++){
                        _this.$elem.find('.slide:eq('+i+')').attr('slide-height', _this.$elem.find('.slide:eq('+i+')').outerHeight());
                        if(_this.$elem.find('.slide:eq('+i+')').outerHeight() > h){
                            _this.$elem.find('.slide:eq('+i+')').addClass('showmore');
                        }
                        _this.$elem.find('.slide:eq('+i+')').height(h);
                        _this.$elem.find('.slide:eq('+i+')').find('.block-right > .text').height(textH);
                    }
                }else{
                    for(var i = 1; i < _this.$elem.find('.slide').length; i++){
                        if(_this.$elem.find('.slide:eq('+i+')').outerHeight() > h){
                            h = _this.$elem.find('.slide:eq('+i+')').outerHeight();
                        }
                    }
                }
            }
            _this.$elem.find('.slides_wrapper').animate({'height': h}, _this.config.speed).attr('first-slide-height', h);
//            if(_this.config.desktop.init){
                var _target = _this.$elem.find('.slide:eq(0)').parent();
                _this.$elem.find('.slide:eq(0)').clone().appendTo(_target);
//            }
            _this.events();
            
            if(_this.config.slideshow){
                setTimeout(function(){
                    _this.$elem.find('.control-r').trigger('click');
                }, _this.config.timeout_for_first_slide);
                _this.config.timeout_id = setTimeout(function(){
                    _this.$elem.find('.control-r').trigger('click');
                }, _this.config.timeout*2);
            }
            return _this;
        },
        events:function(){
            var _this = this;
            $(window).resize(function(){
                if(_this.config.wrapper){
                    _this.config.slidesWidth = _this.$elem.find(_this.config.wrapper_control).width();
                }else{
                    _this.config.slidesWidth = _this.$elem.width();
                }
                _this.$elem.find('.slides_wrapper').css('width', parseInt(_this.config.slidesWidth, 10)*parseInt(_this.config.slidesCount, 10)+'px');
                _this.$elem.find('.slide').css('width', _this.config.slidesWidth+'px');
                var posControl = (parseInt($('body').width(), 10) - parseInt(_this.$elem.find('.wrapper').width(), 10))/2 - 50;
                _this.$elem.find('.control-r').css('right', posControl+'px');
                _this.$elem.find('.control-l').css('left', posControl+'px');
                
                var margin_left = parseInt(_this.$elem.find('.slides_wrapper').css('margin-left'));
                if (-margin_left / _this.config.slidesWidth == _this.config.slidesCount) {
                    _this.$elem.find('.slides_wrapper').css('margin-left', 0);
                    margin_left = 0;
                }
                var h = _this.$elem.find('.slide:eq(' + (-margin_left / _this.config.slidesWidth)+')').outerHeight();
                if(!_this.config.autoHeight){
                    for(var i = 0; i < _this.$elem.find('.slide').length; i++){
                        if(_this.$elem.find('.slide:eq('+i+')').outerHeight() > h){
                            h = _this.$elem.find('.slide:eq('+i+')').outerHeight();
                        }
                    }
                }
                _this.$elem.find('.slides_wrapper').animate({'height': h}, _this.config.speed);
            });
            this.$elem.find('.mobile-control-r').click(function(){
                _this.next_slide();
            });
            this.$elem.find('.mobile-control-l').click(function(){
                _this.prev_slide();
            });
            this.$elem.find('.control-r').click(function(){
                _this.next_slide();
            });
            this.$elem.find('.control-l').click(function () {
                _this.prev_slide();
            });
            this.$elem.find('.switch-state>div').each(function (_index) {
                $(this).click(function(){
                    if(!$(this).hasClass('current')){
                        if(_this.config.lock_animate)
                            return;
                        _this.config.lock_animate = true;
                        var margin_left = parseInt($(this).parent().parent().find('.slides_wrapper').css("margin-left"));
                        $(this).parent().parent().find('.slides_wrapper').animate({'margin-left':-_this.config.slidesWidth*_index}, Math.abs((_this.config.slidesWidth*_index + margin_left))/_this.config.slidesWidth*_this.config.speed, function(){
                            _this.update_status(_this);
                        });
                    }
                });
//                var title_link = this.$elem.find('.slide:eq(' + _index + ') a[rel="status"]');
//                if(title_link.length)
//                    $(this).attr("title", title_link.attr("title"));
            });
            _this.$elem.find('.showmore-btn').click(function(){
                var _target_text = $(this).parent();
                var _target_slide = $(this).parent().parent().parent();
                var _target_slides_wrapper = $(this).parent().parent().parent().parent().parent();
                _target_text.height('inherit');
                _target_slide.height('inherit');
                _target_slides_wrapper.animate({'height': _target_slide.attr('slide-height')}, _this.config.speed);
                $(this).hide();
            });
        },
        next_slide: function(){
            var _this = this;
            if(_this.config.lock_animate)
                return;
            _this.config.lock_animate = true;
            _this.$elem.find('.slides_wrapper').animate({'margin-left':'-=' + _this.config.slidesWidth}, _this.config.speed, function(){
                _this.update_status(_this);
            });
        },
        prev_slide: function(){
            var _this = this;
            if(_this.config.lock_animate)
                return;
            _this.config.lock_animate = true;
            if(!parseInt(_this.$elem.find('.slides_wrapper').css('margin-left')))
                _this.$elem.find('.slides_wrapper').css('margin-left', -_this.config.slidesCount*_this.config.slidesWidth);
            _this.$elem.find('.slides_wrapper').animate({'margin-left':'+=' + _this.config.slidesWidth}, _this.config.speed, function(){
                _this.update_status(_this);
            });
        },
        update_status: function(_this){
            _this.config.lock_animate = false;
            clearTimeout(_this.config.timeout_id);
            if(_this.config.slideshow){
                var new_timeout = parseInt(_this.$elem.find('.slides_wrapper').css('margin-left'))<=-_this.config.slidesCount * _this.config.slidesWidth ? _this.config.timeout_for_first_slide : _this.config.timeout;
                _this.config.timeout_id = setTimeout(function(){
                    _this.$elem.find('.control-r').trigger('click');
                }, new_timeout);
            }
            _this.$elem.find('.switch-state>div').removeClass('current');
            var margin_left = parseInt(_this.$elem.find('.slides_wrapper').css('margin-left'));
            if (-margin_left / _this.config.slidesWidth == _this.config.slidesCount) {
                _this.$elem.find('.slides_wrapper').css('margin-left', 0);
                margin_left = 0;
            }
            _this.$elem.find('.switch-state>div:eq(' + (-margin_left / _this.config.slidesWidth)+')').addClass('current');
            if(_this.config.autoHeight){
                var h = _this.$elem.find('.slide:eq(' + (-margin_left / _this.config.slidesWidth)+')').outerHeight();
                _this.$elem.find('.slides_wrapper').animate({'height': h}, _this.config.speed);
            }else{
                if(_this.config.addShowMore){
                    var textH = _this.$elem.find('.slide:eq(0)').find('.block-right > .text').height();
                    var h = _this.$elem.find('.slides_wrapper').attr('first-slide-height');
                    _this.$elem.find('.slides_wrapper').find('.showmore-btn').show();
                    _this.$elem.find('.slides_wrapper').find('.slide .block-right .text').height(textH);
                    _this.$elem.find('.slides_wrapper').find('.slide').height(h);
                    _this.$elem.find('.slides_wrapper').animate({'height': h}, _this.config.speed);
                    
                }
            }
        }
    };
    
    mainSlider.defaults = mainSlider.prototype.defaults;
    
    $.fn.mainSlider = function(options){
        return this.each(function(){
            new mainSlider(this, options).init();
        });
    };

    window.mainSlider = mainSlider;
})(window, jQuery);
function ajax_widget(id, widget, method, params, error){
    if(!id || !widget || !method)
        return;
    if($(id).length){
        var HostURL = (typeof(ServerURL)=="undefined") ? "" : ServerURL;
        pr = params ? "&"+params.replace(/^&/, "") : "";
        error = error || false;
        $.getJSON(HostURL+"/handlers/widget.php?widget="+widget+"&method="+method+pr+"&callback=?", function(data){
            if(data.html) $(id).html(data.html);
        }).error(function() { if (error) $(id).html(error);});
    }
}
/*! http://mths.be/placeholder v2.0.7 by @mathias */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));
$(function() {
    $('#subscribeForm button').click(function(evt){
        //Отключаем обычное поведение
        evt.preventDefault();
        // var form_data = $("#subscribeForm").serializeArray;
        var email = $('#subscribeForm-email').val();

        //Выполняем ajax запрос
        $.post('/handlers/mailing_subscription.php', {"email": email, "subscribeForm": "Ok"}, function (data) {
            var answerAjax = JSON.parse(data);

            /*проверка ответа param @answer[0] - сожержит код ответа от form->validate(0-мыло не валид/1-ок) answer[1]-
            answer[1] содержит текст ответа*/
            if (answerAjax["state"] == "ok") {
                $('#subscribeHeader').hide(250);
                $('#subscribeForm').hide(250);
                $('#ftrTooltip').show(250).html("<div class='alert alert-success alert-dismissible' role='alert'><button type='button' id='closeHint' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + answerAjax["message"] + "</div>");
            } else if (answerAjax["state"] == "error") {
                $('#subscribeHeader').hide(250);
                $('#subscribeForm').hide(250);
                $('#ftrTooltip').show(250).html("<div class='alert alert-danger alert-dismissible' role='alert'><button type='button' id='closeHint' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + answerAjax["message"] + "</div>");
            }
            $('#closeHint').click(function () {
                $('#ftrTooltip').hide(100);
                $('#subscribeForm').show(100);
                $('#subscribeHeader').show(100);
            });


            //Второй вариант анимации

            // if (answer[0] == 1) {
            //     $('#ftrTooltip') .html("<div class='alert alert-success' role='alert'>" + answer[1] + "</div>").slideDown(1000) .delay(1500) .slideUp(1000);
            //     $('#subscribeHeader').slideUp(1000) .delay(1500) .slideDown(1000);
            // } else if (answer[0] == 0) {
            //     $('#ftrTooltip') .html("<div class='alert alert-danger' role='alert'>" + answer[1] + "</div>").slideDown(1000) .delay(1500) .slideUp(1000);
            //     $('#subscribeHeader').slideUp(1000) .delay(1500) .slideDown(1000);
            // }

        });//end ajax
        return false;
    });//end click
});
$(function(){
    var newsHeight = 0;
    $('#block-4 .wrapper .all-news > div').each(function(index, value){
        var tH = $(this).height();
        if(newsHeight < tH){
            newsHeight = tH;
        }
    });
    $('#block-4 .wrapper .all-news > div').height(newsHeight);
});


(function($){
    $('#block-4 .slider > div').addClass('slide');
    $('#block-4').mainSlider({
        slideshow: false,
        desktop: {
            init: false
        },
        mobile: {
            init: true,
            width: 991,
            wrapper_control: '.text'
        },
        slidesWidth: $('#block-4 > .wrapper').width(),
        autoHeight: false
    });
    $('.block.solutions').mainSlider({
        slideshow: false,
//        wrapper_control: '.wrapper.mobile',
        desktop: {
            init: false
        },
        mobile: {
            init: true,
            width: 991,
            wrapper_control: '.solutions-wrapper'
        },
        autoHeight: false
    });
})(jQuery);

    var addOauth = {
        translates: {
            emptyfield: "Поле [b]%field[/b] не заполнено",
            password: "Пароль"
        },
        site: {
            link_4: "https://trueconf.ru/products/online/password-reset.html"
        },
        settings: {
            id_name: "TrueConf ID"
        }
    };
var OAuth = {};
OAuth.HostURL = (typeof(ServerURL)=="undefined") ? "" : ServerURL;
OAuth.redirect_uri = "";
OAuth.reg_uri = "";
OAuth.lang = "";

OAuth.dialog = function(num){
    if($('#login').css("display") == 'none' && $('#login').text())
        OAuth.dialogInit();
    else
        $("#login").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=dialog&lang=" + OAuth.lang, OAuth.dialogInit);
};

OAuth.dialogInit = function(){
    $('#login').modal().modal('open');
    $('#welcome-login').focus();
    $(document).keypress(function(event){ 
        event.which==13 && $("#welcome-login:visible").length && OAuth.login('welcome-login','welcome-pconf');
    });
};

OAuth.close = function(){
    $('#login').modal('close');
};

OAuth.window = null;
OAuth.extdialog = function(url)
{
    if(OAuth.window != null)
       OAuth.window.close(); 
    OAuth.window = window.open(url, "", "width=800,height=500");
};

OAuth.regform = function()
{
    OAuth.showSpiner();
    $("#login-box-main").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=viewreg"+OAuth.lang+OAuth.redirect_uri, OAuth.closeSpiner);
};

OAuth.linkform = function()
{
    OAuth.showSpiner();     
    $("#login-box-main").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=viewlink"+OAuth.lang+OAuth.redirect_uri, OAuth.closeSpiner);
};

OAuth.denied = function()
{  
    OAuth.showSpiner();
    $("#login-box-main").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=viewdenied"+OAuth.lang+OAuth.redirect_uri, OAuth.closeSpiner);
};

OAuth.socialerror = function()
{  
    OAuth.showSpiner();
    $("#login-box-main").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=viewsocialerror"+OAuth.lang+OAuth.redirect_uri, OAuth.closeSpiner);
};

OAuth.tcform = function(){
    OAuth.showSpiner();     
    $("#login").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=dialog&display=tclogin"+OAuth.lang, OAuth.closeSpiner);
};

OAuth.socialform = function(){
    OAuth.showSpiner();     
    $("#login").load(OAuth.HostURL + "/handlers/widget.php?widget=login&method=dialog&display=social"+OAuth.lang+OAuth.redirect_uri+OAuth.reg_uri, OAuth.closeSpiner);
};
OAuth.logout = function(logout_url, dialog_url)
{
    $.getScript(logout_url);
    setTimeout(function(){
        OAuth.extdialog(dialog_url);
    }, 2000);

};

OAuth.ajax_block = false;
OAuth.getRequest = function(url, params, autocomp)
{
    autocomp = autocomp || false;
    if(OAuth.ajax_block) return;
    OAuth.showSpiner();
    OAuth.ajax_block = true;
    $.post(url, params, function(data){
        var result = $.parseJSON(data);
        if(result.error){
            $("#login-box-main p.error").html(result.error);
            OAuth.ajax_block = false;
            OAuth.closeSpiner();
        }else if(result.redirect)
            OAuth.redirect(result.redirect, autocomp);
        else if(result.func && window["OAuth"][result.func]){
            OAuth.closeSpiner();    
            window["OAuth"][result.func](result.param ? result.param : null);
            OAuth.ajax_block = false;
        }/*else
            OAuth.closeSpiner();*/
    });
};
OAuth.getRequestCanvas = function(url, params, autocomp)
{
    autocomp = autocomp || false;
    OAuth.ajax_block = true;
    $.post(url, params, function(data){
        var result = $.parseJSON(data);
        if(result.error){
            $("#desc").hide();
            $("#error").html(result.error);
        }
        else if(result.redirect) {
            $(".main-reg").hide(0);
            $(".reg-ok").show(0);
        }
    });
};

OAuth.reg = function()
{
    var error = [];
    if(!$("#reg-login").val().length){
        error.push(addOauth.translates.emptyfield.replace('%field', addOauth.settings.id_name).replace('[b]','<b>').replace('[/b]','</b>'));
    }
    if($("#reg-email").length && !$("#reg-email").val().length){
        error.push(addOauth.translates.emptyfield.replace('%field', 'Email').replace('[b]','<b>').replace('[/b]','</b>'));
    }
    if(error.length){
        $("#login-box-main p.error").html(error.join("<br />"));
    }else{
        OAuth.getRequest(OAuth.HostURL + "/handlers/widget.php?widget=login&method=create", {login: $("#reg-login").val(), email: $("#reg-email").val()});
    }
};

OAuth.regCanvas = function()
{
    var error = [];
    if(!$("#reg-login").val().length){
        error.push(addOauth.translates.emptyfield.replace('%field', addOauth.settings.id_name).replace('[b]','<b>').replace('[/b]','</b>'));
    }   
    if(error.length){
        $("#desc").hide();
        $("#error").html(error.join("<br />"));
    }
    else
        OAuth.getRequestCanvas(OAuth.HostURL + "/handlers/widget.php?widget=login&method=create", {login: $("#reg-login").val(), canvas: "1"});
};

OAuth.link = function(login, pwd_id)
{
    var error = [];
    if(!login){
        error.push(addOauth.translates.emptyfield.replace('%field', addOauth.settings.id_name).replace('[b]','<b>').replace('[/b]','</b>'));
    }
    if($("#"+pwd_id).length && !$("#"+pwd_id).val().length){
        error.push(addOauth.translates.emptyfield.replace('%field', addOauth.translates.password).replace('[b]','<b>').replace('[/b]','</b>'));
    }
    if(error.length){
        $("#login-box-main p.error").html(error.join("<br />"));
    }else{
        OAuth.getRequest(OAuth.HostURL + "/handlers/widget.php?widget=login&method=link", {login: login, pwd: $("#"+pwd_id).val()});
    }
};

OAuth.linkCanvas = function(login, password)
{
    var error = [];
    if (!login){
        error.push(addOauth.translates.emptyfield.replace('%field', addOauth.settings.id_name).replace('[b]','<b>').replace('[/b]','</b>'));
    }
    if (!password){
        error.push(addOauth.translates.emptyfield.replace('%field', addOauth.translates.password).replace('[b]','<b>').replace('[/b]','</b>'));
    }
    if(error.length) {
        $("#desc").hide();
        $("#error").html(error.join("<br />"));
    }
    else
        OAuth.getRequestCanvas(OAuth.HostURL + "/handlers/widget.php?widget=login&method=link", {login: login, pwd: password});
};

OAuth.login = function(login_id, pwd_id)
{
//    $('.modal#login .login-curtain').show();
//    $('.modal#login .preloader').show();
    var login = $("#"+login_id).val();
    var pwd = $("#"+pwd_id).val();
    var error = "";
    if(!login){
        error += addOauth.translates.emptyfield.replace('%field', addOauth.settings.id_name).replace('[b]','<b>').replace('[/b]','</b>')+"<br />";
        OAuth.setErrorOnLoginForm('welcome-login');
    }
    if(!pwd){
        error += addOauth.translates.emptyfield.replace('%field', addOauth.translates.password).replace('[b]','<b>').replace('[/b]','</b>');
        OAuth.setErrorOnLoginForm('welcome-pconf');
    }
    if(error) {
        $('#login-box-main p.error').html(error);

        $('.modal#login .login-curtain').hide();
        $('.modal#login .preloader').hide();
    } else {
        OAuth.getRequest(OAuth.HostURL + "/handlers/widget.php?widget=login&method=login", {login: login, pwd: pwd}, true);
    }
};

OAuth.redirect = function(url, autocomp)
{
     if(url){
        OAuth.showSpiner();
        
        if (autocomp && br.indexOf("opera") == -1){
            var attr = $('#login-form').attr('action');
            $('#login-form').attr('action', attr + '&url=' + escape(url));
            $('#login-form').submit();
        } else 
            window.location.href = url;
     }
};

OAuth.showSpiner = function()
{
    $('#login .login-curtain').show();
    $('#login .preloader').show();
};

OAuth.closeSpiner = function()
{
    $('.modal#login .login-curtain').hide();
    $('.modal#login .preloader').hide();
};

OAuth.goPasswordAssistance = function(id, login) {
    var url = addOauth.site.link_4;
    var obj  = $('#'+id);
    if(obj.length)
        url += "?login="+encodeURIComponent(obj.val());
    else if(login)
        url += "?login="+encodeURIComponent(login);
    $("#forgot-password").attr("href", url);
};

// Установка стилей для materialize формы лоигна в случае ошибки
OAuth.setErrorOnLoginForm = function(fieldId) {
    $('.input-field #' + fieldId + ' + label').css({'color': 'red'});
    $('.input-field input[type=text]:focus#' + fieldId + ' + label').css({'color': 'red'});
    $('.input-field #' + fieldId + ' input[type=text]:active + label').css({'color': 'red'});
    $('.input-field #' + fieldId).removeClass('valid');
    $('.input-field #' + fieldId).addClass('invalid');
};


    var addWidgetsMain = {
        settings: {
            lang: "ru"
        }
    };

ajax_widget("#login-link", "login", "loginlink");
ajax_widget("#exit-link", "login", "exitlink");
ajax_widget("#welcome-panel", "login", "userinfo");
ajax_widget("#live_chat", "livechat", "render");
ajax_widget("#cookiesInformer", "cookiesinformer", "render");

    var addInit = {
        translates: {
            close: "Закрыть",
            scrollup: "Наверх",
            next: "следующее",
            previous: "предыдущее",
            close_2: "закрыть",
            Photo: "Фото",
            not_support_ie: "Версия вашего браузера Internet Explorer не поддерживается. Пожалуйста, используйте более современный браузер.",
            warning: "Предупреждение"
        },
        video_url_1: "https://www.youtube.com/embed/sr2O1xOacUE?autoplay=1&disablekb=1",
        video_url_2: "https://www.youtube.com/embed/sr2O1xOacUE",
        settings: {
            lang: "ru",
            server_url: "https://trueconf.ru"
        }
    };

/* Получить GET-параметр по имени */
function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

/* Получить язык страницы. Возвращает код языка, например 'ru' */
function getLang() {
    return document.getElementsByTagName('html')[0].getAttribute('lang');
}

/* Сглаживает текст ячеек таблицы, который не уместился */
function smooth_text() {
    $(".content-container table td").each(function(){
        var currentHtml = $(this).html();

        /*add 'input' for page /persons/events/trial/. Because not work button 'Now' in UI widget*/
        if(!$(this).find("select, textarea, input").length && $(this).text().length > 0){
            $(this).html("<div class='can-be-long'><div></div><span>" + currentHtml + "</span></div>");
            if($(this).find("span").width() > $(this).children("div").width()){
                var text = $.trim($(this).text());
                $(this).find("span").attr('title', text);
                $(this).find("div").attr('title', text);
            }else{
                $(this).html(currentHtml);
            }
        }
    });
}

function ajax_get_application(app_name) {
    var HostURL = (typeof(ServerURL)=="undefined") ? "" : ServerURL;
    $.getJSON(HostURL+"/handlers/widget.php?widget=application&method=getapp&app_name="+app_name+"&callback=?", function(data){
        if(data.application) {
            for (var property in data.application) {
                $("span."+app_name+"_"+property).replaceWith(data.application[property]);
            }
        }
    });
}

function ListCheckAll(mark, frm_name, ele_name) {
	for (i = 0; i < document.forms[frm_name].elements.length; i++) {
		var item = document.forms[frm_name].elements[i];

		if (item.name == ele_name) {
			item.checked = mark;
        }
    }
}
/* дублирование twig фильтра cut */
function cutLongString(str, length) {
    var result = str;
    var length = length || 32;
    var str_length = str.length;
    if (str_length > length) {
        var cutstr = str.substr(0, Math.round(length / 2)) + '...';
        cutstr += str.substr(str_length - Math.round(length / 2), Math.round(length / 2));
        result = cutstr;
    }
    return result;
}

/* Invoke the plugin placeholder */
$('input, textarea').placeholder();

/* Change classes of parent div for all input text and password accordingly design v2.0*/
$('input[type=text], input[type=password], select, textarea').focus(function () {
    $(this).parent().addClass('active');
});
$('input[type=text], input[type=password], select, textarea').blur(function () {
    $(this).parent().removeClass('active');
});

/* Handler on Enter keydown in registration form */
$('#reg').keydown(function (event) {
    if (event.keyCode == '13')
        $('#reg').submit();
});

/* Logic for login page */
if ($('#fLogin').length) {
    $('#fLogin').keydown(function (event) {
        if (event.keyCode == '13')
            $('#fLogin').submit();
    });
    $('#form-login, #form-password').placeholder();
    $('#form-login').focus();
}

/* Logic for ru|com index page (BUSINESS and EDUCATION block) */
(function () {

    /* scroll to */
    if(!$('#scroll-up').length){
        $('body').append('<div id="scroll-up"></div>');
        $('#scroll-up').click(function(){
            $('body,html').animate({scrollTop:0},800);
        });
        $(window).scroll(function(){
            if($(this).scrollTop() > $( window ).height())
                $('#scroll-up').fadeIn(400);
            else
                $('#scroll-up').fadeOut(400);
        });
    }

})();

(function() {
    $('#container').css('padding-bottom', $('#page_description').height());
})();

if(navigator.appVersion.match(/MSIE\s+(5|6|7)/i)){
    if($.cookie("old_browser") != 1 ){
        $.cookie("old_browser", 1, {expires: 7, path: "/"});
        var msg = addInit.translate.not_support_ie;
        $("#js_confirmation").html(msg);
        $("#js_confirmation").dialog({
            title: addInit.translate.warning,
            width:400,
            modal: true,
            resizable: false,
            draggable: false
        });
    }
}

smooth_text();


(function(){
    $('.scrollspy').scrollSpy();
    $('.materialboxed').materialbox();
    $('#products').slider({
        full_width: false,
        height: '503px',     //Set height of slider. (Default: 400). We set 585px, but in mobile version in css we set 417px !important
        interval: 10000,     //Set the duration between transitions in ms. (Default: 6000). We set 1000000 seconds
        transition: 500,     //Set the duration of the transition animation in ms. (Default: 500). We set 0.5 second
        indicators: true     //Set to false to hide slide indicators. (Default: True)
    });
})(jQuery);


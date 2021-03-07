window.addEventListener("load", function(){ 
    const metricsArray = [
        {
            'selector': '.open_chat',
            'eventCategory': 'open_chat', 
            'eventName': 'open_chat_click',
            'clicked': false
        },
        {
            'selector': '.dwn_server', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_server',
            'clicked': false
        },
        {
            'selector': '.enterprise_email', 
            'eventCategory': 'email_send', 
            'eventName': 'trueconf_enterprise_email',
            'clicked': false
        }, // только на РУ сайте в данный момент
        {
            'selector': '.enterprise_quote', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_enterprise_quote',
            'clicked': false
        }, // только на EN сайте в данный момент
        {
            'selector': '.directory_request', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_directory_request',
            'clicked': false
        },
        {
            'selector': '.licence_manager_request', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_LM_request',
            'clicked': false
        },
        {
            'selector': '.mcu_request', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_MCU_request',
            'clicked': false
        },
        {
            'selector': '.dwn_terminal', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_terminal',
            'clicked': false
        },
        {
            'selector': '.terminal_request', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_terminal_request',
            'clicked': false
        },
        {
            'selector': '.group_request', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_group_request',
            'clicked': false
        },
        {
            'selector': '.dwn_tracker', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_tracker',
            'clicked': false
        },
        {
            'selector': '.dwn_weathervane', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_weathervane',
            'clicked': false
        },
        {
            'selector': '.weathervane_request', 
            'eventCategory': 'open_chat', 
            'eventName': 'trueconf_weathervane_request',
            'clicked': false
        },
        {
            'selector': '.dwn_online', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_online',
            'clicked': false
        },
        {
            'selector': '.dwn_kiosk', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_kiosk',
            'clicked': false
        },
        {
            'selector': '.dwn_android', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_android',
            'clicked': false
        },
        {
            'selector': '.dwn_ios', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_ios',
            'clicked': false
        },
        {
            'selector': '.dwn_linux', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_linux',
            'clicked': false
        },
        {
            'selector': '.dwn_osx', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_osx',
            'clicked': false
        },
        {
            'selector': '.dwn_win', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_win_main',
            'clicked': false
        },
        {
            'selector': '.dwn_aws', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_amazon',
            'clicked': false
        },
        {
            'selector': '.dwn_win_classic', 
            'eventCategory': 'download', 
            'eventName': 'trueconf_windows',
            'clicked': false
        },
        {
            'selector': '.tcs_invoice',
            'eventCategory': 'order_tcs',
            'eventName': 'invoice_pay_button',
            'clicked': false
        },
        {
            'selector': '.tcs_checkout',
            'eventCategory': 'order_tcs',
            'eventName': 'proceed_checkout_button',
            'clicked': false
        },
        {
            'selector': '.tcs_buy', 
            'eventCategory': 'order_tcs', 
            'eventName': 'buy_button',
            'clicked': false
        },
        {
            'selector': '.tcg_buy',
            'eventCategory': 'tc_group',
            'eventName': 'buy_now',
            'clicked': false
        },
        {
            'selector': '.tcg_config',
            'eventCategory': 'tc_group',
            'eventName': 'tcg_config',
            'clicked': false
        }
    ]

    function handleMetricEvents (eventCategory, eventName) {
        ga('send', 'event', eventCategory, eventName);
        yaCounter1646703.reachGoal(eventName);
    }
    
    for (let i = 0; i < metricsArray.length; i++) {
        let metric = metricsArray[i];
        let selectedItems = document.querySelectorAll(metric['selector']);

        if (selectedItems.length !== 0) {
            selectedItems.forEach(function(target) {
                target.addEventListener('click', function () {
                    if (metric['clicked'] !== true) {
                        handleMetricEvents(metric['eventCategory'], metric['eventName'])
                        metric['clicked'] = true;
                    }
                }, {once: true});
            }); 
        }
    }
});

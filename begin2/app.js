'use strict';

(function() {
    var app = {
        data: {}
    };

    var bootstrap = function() {
        $(function() {
            app.mobileApp = new kendo.mobile.Application(document.body, {
                skin: 'flat',
                initial: 'components/login/view.html'
            });
        });
    };
    
    
     window.Books = {
        data: new kendo.data.DataSource({
            transport: {
                read: {
                    //url: "components/data/books.js",
                    url: "https://greenapi.odooportal.com/api/v1/event_gifts",
                    type: "get",
                    dataType: "json"
                }
            },
        schema: {
            data: "data"
        }
    }),
    };
    
       window.login = {
        data: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                         $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/login",
                        contentType: "application/json",
                        data: JSON.stringify({ login: "admin",password: "admin" }),
                        success: function(result) {
                            navigator.notification.alert(result);
						
                        },
                        error: function() {
                            navigator.notification.alert("Unfortunately,");
                            
                        }
                });
                    }
            },
        schema: {
            data: "data"
        }
    }),
    };
    

    if (window.cordova) {
        document.addEventListener('deviceready', function() {
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide();
            }

            var element = document.getElementById('appDrawer');
            if (typeof(element) != 'undefined' && element !== null) {
                if (window.navigator.msPointerEnabled) {
                    $('#navigation-container').on('MSPointerDown', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                } else {
                    $('#navigation-container').on('touchstart', 'a', function(event) {
                        app.keepActiveState($(this));
                    });
                }
            }

            bootstrap();
        }, false);
    } else {
        bootstrap();
    }

    app.keepActiveState = function _keepActiveState(item) {
        var currentItem = item;
        $('#navigation-container li a.active').removeClass('active');
        currentItem.addClass('active');
    };

    window.app = app;

    app.isOnline = function() {
        if (!navigator || !navigator.connection) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
}());

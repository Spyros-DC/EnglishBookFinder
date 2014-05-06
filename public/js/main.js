/*global require*/

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        },
        anyChange: {
            deps: [
                'jquery'
            ]
        }
    },
    paths: {
        jquery: 'libs/jquery-1.11.0',
        backbone: 'libs/backbone',
        underscore: 'libs/underscore',
        bootstrap: 'libs/bootstrap',
        localStorage: 'libs/localStorage',
        anyChange: 'libs/anyChange'
    }
});

require([
    'app/app'
], function (App) {
   'use strict';
    
    App.initialize();

    });

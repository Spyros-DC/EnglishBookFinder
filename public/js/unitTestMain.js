/*global require*/
'use strict';

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
        'QUnit': {
           exports: 'QUnit',
           init: function() {
               QUnit.config.autoload = false;
               QUnit.config.autostart = false;
              }
           }
    },
    paths: {
        jquery: 'libs/jquery-1.11.0',
        backbone: 'libs/backbone',
        underscore: 'libs/underscore',
        bootstrap: 'libs/bootstrap',
        localStorage: 'libs/localStorage',
        'QUnit': 'libs/qunit-1.14.0'
    }
});

require([
    'QUnit',
    'tests/utilsTest'
], function (QUnit, utilsTest) {
   'use strict';
    
    utilsTest.run();
    QUnit.load();
    QUnit.start();
    });

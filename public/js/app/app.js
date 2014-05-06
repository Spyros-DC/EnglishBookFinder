define([
      'app/views/appView'
        ],function(AppView){

      'use strict';

      var initialize = function() {
         new AppView();
         };

      return {
         initialize: initialize
      };

      }

);

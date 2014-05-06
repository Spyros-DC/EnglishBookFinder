define([
       'backbone',
       'app/models/basketModel',
       'localStorage'
       ], function (Backbone, BasketModel) {

         'use strict';

         var BasketCollection = Backbone.Collection.extend({

            localStorage: new Backbone.LocalStorage("MyBasket"),

            model: BasketModel

            });

         return BasketCollection;

      });

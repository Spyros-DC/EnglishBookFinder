define([
      'jquery',
      'backbone',
      'app/globals'
      ], function ($, Backbone, Globals) {

         'use strict';

         var BasketView = Backbone.View.extend({

            tagName: 'tr',

            initialize: function() {
               this.listenTo(this.model, 'destroy', this.remove);
            },

            events: {
               'click .glyphicon': 'clear'
               },
             
            template: Globals.template('basketTemplate'),

            render: function () {
               this.$el.html(this.template( this.model.toJSON() ) );
               return this;
            },

            clear: function() {
               this.model.destroy();
               }

            });

         return BasketView;

      });

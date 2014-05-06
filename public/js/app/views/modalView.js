define([
      'jquery',
      'backbone',
      'app/globals',
      'bootstrap'
      ], function ($, Backbone, Globals, Bootstrap) {

         'use strict';

         var ModalView = Backbone.View.extend({

            className:'modal fade',

            template: Globals.template('selectTemplate'),

            initialize: function() {
               var that = this;
               this.render();
               $('body').append(this.el);
               this.$el.modal('show');
               this.$el.on('hidden.bs.modal', function() {
                  that.onModalHidden();
                  });
               },

            events: {
               'click .add': 'basketBook'
               },

            render: function () {
               this.$el.html(this.template( this.model.toJSON() ) );
               return this;
               },

            onModalHidden: function() {
               this.$el.off('hidden.bs.modal');
               this.remove();
               },

            basketBook: function() {
               Globals.basketCollection.create({'Τίτλος': this.model.attributes.Τίτλος, 'Τιμή_λιανικής': this.model.attributes.Τιμή_λιανικής});               
               }

            });

         return ModalView;

      });


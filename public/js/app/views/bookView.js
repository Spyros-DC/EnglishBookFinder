define([
      'jquery',
      'backbone',
      'app/globals',
      'app/views/basketView',
      'app/views/modalView'
      ], function ($, Backbone, Globals, BasketView, ModalView) {

         'use strict';

         var BookView = Backbone.View.extend({

            tagName: 'tr',
             
            template: Globals.template('bookTemplate'),

            events: {
               'click .add': 'basketBook',
               'click .bookModal':'showModal'
               },

            render: function () {
               this.$el.html(this.template( this.model.toJSON() ) );
               return this;
            },

            basketBook: function() {
               Globals.basketCollection.create({'Τίτλος': this.model.attributes.Τίτλος, 'Τιμή_λιανικής': this.model.attributes.Τιμή_λιανικής});               
               },

            showModal: function(e) {
               e.preventDefault();
               new ModalView({model: this.model});
               }

            });

         return BookView;

      });

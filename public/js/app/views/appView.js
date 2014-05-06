define([
       'anyChange',
       'app/views/booksView',
       'app/globals',
       'app/views/basketView',
       'validateFunctions'
       ], function (anyChange, BooksView, Globals, BasketView, validateFunctions) {

         'use strict';
         
         var AppView = Backbone.View.extend({

            el: '.container',

            initialize: function() {
               var that = this;
               that.input = that.$('#input');
               that.books2= that.$('#books2');
               var booksView = new BooksView({collection: Globals.booksCollection});
               $('#main-table').append(booksView.el);
               that.listenTo(Globals.basketCollection, 'add', that.addOne);
               that.listenTo(Globals.basketCollection, 'reset', that.addAll);
               Globals.basketCollection.fetch();
               that.input.anyChange(that.newCollection.bind(that));
            },

            views: [],

            events: {
               'submit form':'noAction'
               },

            noAction: function(e) {
               e.preventDefault();
               },

            newCollection: function() {
               var that = this;
               if (that.input.val().length > 3) {
                  var theBook = that.input.val();
                  that.views.unshift(theBook);
                  that.views.length = 2;
                  if( validateFunctions.validateOne(that.views[0], that.views[1]) === true) {
                     var data = {};
                     data.message = theBook;
                     Globals.vent.trigger('key:up', data);
                     }
                  else {
                     Globals.vent.trigger('key:same', theBook);
                     }
                  }
             },

            addOne: function(book) {
                 var basketView = new BasketView({model: book});
                 this.books2.append(basketView.render().el);
                 },

            addAll: function() {
               basketCollection.each(this.addOne, this);
            },

            });

         return AppView;

      });

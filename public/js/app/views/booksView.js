define([
      'jquery',
      'backbone',
      'underscore',
      'app/views/bookView',
      'app/globals',
      'validateFunctions'
      ], function ($, Backbone, _, BookView, Globals, validateFunctions) {

         'use strict';

         var BooskView = Backbone.View.extend({

            tagName: 'tbody',

            initialize: function() {
               this.render();
               this.listenTo( this.collection, 'reset', this.render);
               Globals.vent.on('key:up', this.newCollection, this);
               Globals.vent.on('key:same', this.smallerCollection, this);
            },

            views: [],

            render: function () {
               this.cleanUp();
               this.collection.each( function(book) {
                  var bookView = new BookView({ model: book});
                  this.$el.append(bookView.render().el);
                  this.views.push(bookView);
                  },this);
            },

            cleanUp: function() {
               for (var i = 0; i<this.views.length; i++) {
                     this.views[i].remove();
                  }
               this.views.length = 0;
               },

             newCollection: function(data) {
              var that = this; 
               $.ajax({
                  type: 'POST',
                  data: JSON.stringify(data),
                  contentType: 'application/json',
                  url: 'http://localhost:8080/results',
                  success: function() {
                     that.collection.fetch({reset:true});
                  }
                  }); 
               },

               smallerCollection: function (theBook) {
                   var processBook = validateFunctions.processMessage(theBook);
                   var smallCollection = this.collection.select(function(book) {
                         return book.attributes['Τίτλος'].match(processBook);
                         });
                   this.collection.reset(smallCollection);
                  } 

            });

         return BooskView;

      });

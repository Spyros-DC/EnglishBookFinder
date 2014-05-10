define([
      'backbone',
      'jquery',
      'underscore',
      'app/collections/booksCollection',
      'app/collections/BasketCollection'
      ],function(Backbone, $, _, BooksCollection, BasketCollection){

      'use strict';

      var template = function(id) {
         return _.template( $('#'+id).html() );
         };

      var vent = _.extend({}, Backbone.Events);

      var booksCollection = new BooksCollection (
            [
               {
               Εκδόσεις : 'Sxedia',
               Τίτλος:'My first english book',
               ISBN : '123',
               _id: 'one'
               },
               {
               Εκδόσεις : 'Sxedia',
               Τίτλος:'My very first english book',
               ISBN : '1234',
               _id: 'two'
               },
               {
               Εκδόσεις : 'Sxedia',
               Τίτλος:'My very very first english book',
               ISBN : '123456',
               _id: 'three'
               }

            ]
         );

      var basketCollection = new BasketCollection([]);

      return {
         template: template,
         vent: vent,
         booksCollection: booksCollection,
         basketCollection: basketCollection
      };

      }

);

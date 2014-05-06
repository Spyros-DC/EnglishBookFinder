define([
       'backbone',
       'app/models/bookModel'
       ], function (Backbone, BookModel) {

         'use strict';

         var BooksCollection = Backbone.Collection.extend({

            model: BookModel,

            url: '/results'

            });

         return BooksCollection;

      });

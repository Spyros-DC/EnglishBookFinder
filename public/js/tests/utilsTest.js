define([
      'validateFunctions'
        ],function(validateFunctions){

      'use strict';

      var run = function() {
         test('test for input validation', function() {
            var book = 'toby';
            equal(validateFunctions.validateOne(book, 'toby'), false);
            equal(validateFunctions.validateOne(book, 'tobysae'), true);
            equal(validateFunctions.validateOne(book, 'tob'), false);
            equal(validateFunctions.validateOne(book, 'tom'), true);
            equal(validateFunctions.validateOne(book, 'lola'), true);
            equal(validateFunctions.validateOne(book, ''), true);
            });
         };

      return {
         run: run
         }

      }

);

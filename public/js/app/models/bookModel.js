define([
    'backbone'
], function (Backbone) {
    'use strict';

    var BookModel = Backbone.Model.extend({
	
	 idAttribute: "_id",  

        defaults: {
		      Τίτλος:'My first english book',
		      'Τιμή_λιανικής': 1,
		      Εκδόσεις : 'Sxedia',
		      ISBN : '123',
		      'Τιμή_χονδρικής': 0,
            _id: 'one'

        }
    });

    return BookModel;
});

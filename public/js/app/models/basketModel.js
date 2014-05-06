define([
    'backbone'
], function (Backbone) {
    'use strict';

    var BasketModel = Backbone.Model.extend({
	
        defaults: {
		       Τίτλος:'My second english book',
		      'Τιμή_λιανικής': 0
       }
    });

    return BasketModel;
});

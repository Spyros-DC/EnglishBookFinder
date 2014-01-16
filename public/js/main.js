(function() {

  window.App = {
  Model: {},
  Collection: {},
  Views: {}
  };

  App.Model.Book = Backbone.Model.extend({ 

  defaults: {
    title:'two',
    'τιμή_λιανική': 1,
    Εκδόσεις : 'Sxedia',
    isbn : '123',
    author : 'John'
  }
  });

  App.Collection.Books = Backbone.Collection.extend({
    model: App.Model.Book,

    url: '/results'
  });

  App.Views.Book = Backbone.View.extend({

   tagName: 'tr',

   template: _.template( $('#bookTemplate').html() ),


   render: function () {
     this.$el.html(this.template(this.model.toJSON()) );
     return this;
   }
  });

  App.Views.Books = Backbone.View.extend({

    tagName: 'table',

    attributes: {
      'border': '1'
    },

    initialize: function() {
      this.render();
      this.listenTo( this.collection, 'reset', this.render);
    },

    render: function() {
      this.$el.empty();
      this.$el.append("<tr><th>Τίτλος</th><th>Τιμή σε ευρώ</th><th>Εκδόσεις</th></tr>");
      this.collection.each(function(book){
        // για κάθε βιβλίο και μια view
        var bookView = new App.Views.Book({ model : book});
        this.$el.append(bookView.render().el);
    },this);
    return this;
   }

  });

  var booksCollection = new App.Collection.Books (
    [
      {
      title:'My first english book',
      editions : 'Sxedia17',
      'τιμή_λιανική': 12,
      isbn : '123',
      author : 'John',
      Εκδόσεις: 'sxedia21'
    },
    {
      title:'My very first english book',
      editions : 'Sxedia21',
      'τιμή_λιανική': 13,
      isbn : '123',
      author : 'John',
      Εκδόσεις: 'sxedia17'
    },
    {
      title:'My very very first english book',
      editions : 'Sxedia2011',
      'τιμή_λιανική': 1,
      isbn : '123',
      author : 'John',
      Εκδόσεις: 'sxedia2011'
    }
      ]
    );

  App.Views.Form = Backbone.View.extend ({
    el: '#form',

    events: {
      "keyup #input": 'select'
    },

    select: function() {
      var theBook = $('#input').val();
      var data = {};
      data.message = theBook;
      
      $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://englishbooks-thalassa.rhcloud.com//results',
        success: function() {

          booksCollection.fetch({reset:true}); 
        }
      });
  }

  });

  new App.Views.Form;
  var booksView = new App.Views.Books({ collection: booksCollection });
  $('#books').append(booksView.el);

})();
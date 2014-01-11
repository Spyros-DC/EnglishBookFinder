
var BookModel = Backbone.Model.extend({ 

defaults: {
  title:'two',
  'τιμή_λιανική': 1,
  editions : 'Sxedia',
  isbn : '123',
  author : 'John'
}
});

var BooksCollection = Backbone.Collection.extend({
  model: BookModel,

  url: '/results'
});

var BooksView = Backbone.View.extend({

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
    this.$el.append("<tr><th>Τίτλος</th><th>Τιμή</th></tr>");
    this.collection.each(function(book){
      // για κάθε βιβλίο και μια view
      var bookView = new BookView({ model : book});
      this.$el.append(bookView.render().el);
  },this);
  return this;
 }

});


var BookView = Backbone.View.extend({

 tagName: 'tr',

 template: _.template( $('#bookTemplate').html() ),


 render: function () {
   this.$el.html(this.template(this.model.toJSON()) );
   return this;
 }
});
var booksCollection = new BooksCollection(
  [
    {
    title:'two',
    editions : 'Sxedia',
    'τιμή_λιανική': 12,
    isbn : '123',
    author : 'John'
  },
  {
    title:'three',
    editions : 'Sxedia',
    'τιμή_λιανική': 13,
    isbn : '123',
    author : 'John'
  },
  {
    title:'four',
    editions : 'Sxedia',
    'τιμή_λιανική': 1,
    isbn : '123',
    author : 'John'
  }
    ]
  );

var FormView = Backbone.View.extend ({
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
      url: 'http://englishbooks-thalassa.rhcloud.com/results',
      success: function() {

        booksCollection.fetch({reset:true}); 
      }
    });
}

});

new FormView;
var booksView = new BooksView({ collection: booksCollection });
$('#books').append(booksView.el);

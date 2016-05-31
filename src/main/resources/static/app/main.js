var $ = require('jquery');
var BookCollection = require('./models/book-collection');
var BookListView = require('./views/book-list-view');

$(function () {
    var bookCollection = new BookCollection();
    var bookListView = new BookListView(bookCollection);
    
    $('#book-list').append(bookListView.$el);

    bookCollection.fetch();
});

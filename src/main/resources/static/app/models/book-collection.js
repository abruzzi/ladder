var $ = require('jquery');
var Backbone = require('backbone');
var BookModel = require('./book-model');

var BookCollection = Backbone.Collection.extend({
    url: '/books',
    model: BookModel
});

module.exports = BookCollection;
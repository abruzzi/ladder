var $ = require('jquery');
var Backbone = require('backbone');

var BookModel = Backbone.Model.extend({
    defaults: {
        name: 'Book Name',
        author: 'Book Author',
        description: 'Book Description'
    }
});

module.exports = BookModel;
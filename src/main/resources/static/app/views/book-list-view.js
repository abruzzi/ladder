var _ = require('underscore');
var Backbone = require('backbone');

var BookListView = Backbone.View.extend({
    initialize: function(collection) {
        this.collection = collection;
        this.collection.bind('add', _.bind(this.render, this));
    },

    render: function() {
        var template = require('../templates/book-list-item.hbs');
        this.$el.html(template({'books': this.collection.toJSON()}));
        return this;
    }
});

module.exports = BookListView;
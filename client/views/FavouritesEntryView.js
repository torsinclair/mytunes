var FavouritesEntryView = Backbone.View.extend({

  tagName: 'tr', 

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    this.render();
    // this.$el.on('click', function() {
    //   this.model.enqueue();
    // }, this);
  },

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
var FavouritesView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Favourites</th>').append(
      this.collection.map(function(song) {
        return new FavouritesEntryView({model: song}).render();
      }));
  }
});
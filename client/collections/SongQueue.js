// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
      this.saveCookie();
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length >= 1) {
        this.playFirst();
      }
      this.saveCookie();
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
      this.saveCookie();
    });
  },

  playFirst: function() {
    // var next = this.at(0);
    // this.trigger('play', next);
    this.at(0).play();
  },

  saveCookie: function() {
    var cookie = 'queue=';
    for (var i = 0; i < this.length; i++) {
      cookie += this.at(i).attributes.title + '+';
    }
    document.cookie = cookie;
  }

});
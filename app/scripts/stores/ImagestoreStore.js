var Reflux = require('reflux');

var data = [];

var ImagestoreStore = Reflux.createStore({

  init: function() {
    console.log('ImagestoreStore initialized');
    // This funciton will be called when the store will be first initialized
  }

});

module.exports = ImagestoreStore;

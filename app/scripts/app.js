var Router = require('./router');
var ImageActions = require('./actions/imageActions');

setInterval(function() {
  ImageActions.fetchList();
}, 5000);

Router.start();

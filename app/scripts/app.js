var Router = require('./router');
var ImageActions = require('./actions/imageActions');

setInterval(function() {
  ImageActions.fetchList();
}, 30000);

Router.start();

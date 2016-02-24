var React = require('react');

var Map = React.createClass({

  render: function () {
    /*Leaving it like this is the start, the css made a beautiful box for the map*/
    return (
      <div className="map-holder">
        <p>Loading...</p>
        <div id="map"></div>
      </div>
    );
  }
});

module.exports = Map;

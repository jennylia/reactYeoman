var React = require('react');

var Map = React.createClass({

  /*This is a react Component Spec and lifecycle function
   * Invoked once, only on the client (not on the server),
   * immediately after the initial rendering occurs.
   * At this point in the lifecycle, you can access any refs to your children
   * (e.g., to access the underlying DOM representation).
   * The componentDidMount() method of child components is invoked before
   * that of parent components.
   https://facebook.github.io/react/docs/component-specs.html
   */
  componentDidMount: function () {
    this.componentDidUpdate();
  },

  /*
   * Invoked immediately after the component's updates are flushed to the DOM.
   * This method is not called for the initial render.

   Use this as an opportunity to operate on the DOM when the component has been updated.*/
  componentDidUpdate: function () {
    if (this.lastLat == this.props.lat && this.lastLng == this.props.lng) {
      //No need to reinitialize
      return;
    }
    //update the last location
    this.lastLat = this.props.lastLat;
    this.lastLng = this.props.lng;

    //Paris:
    //lat: 48.856614,
    //lng: 2.3522219
    var map = new GMaps({
      el: '#map',
      lat:48.856614,
      lng:2.3522219
    });

    map.addMarker({
      lat: this.props.lat,
      lng: this.props.lng
    });
  },
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

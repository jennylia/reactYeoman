var React = require('react');
var Button = require('react-bootstrap').Button;
var Well = require('react-bootstrap').Well;
var ImageGrid = require('./imagegrid');
var Map = require('./map');
var ImageActions = require('../actions/imageActions');

var Home = React.createClass({

  getInitialState(){

    // Extract the favorite locations from local storage

    var favorites = [];

    if(localStorage.favorites){
      favorites = JSON.parse(localStorage.favorites);
    }

    // Nobody would get mad if we center it on Paris by default

    return {
      favorites: favorites,
      currentAddress: 'Paris, France',
      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    };
  },

  render: function() {
    return (
      <div className="container">
        <Well>

          <h1>Travel Journal</h1>
          <Button bsStyle='primary' onClick={ImageActions.fetchList}>More Photos</Button>
          <Well>
            <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} />

          </Well>
        </Well>

        <Well>

          <ImageGrid></ImageGrid>
        </Well>
      </div>
    );
  }
});

module.exports = Home;

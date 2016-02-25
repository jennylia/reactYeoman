var React = require('react');
var Button = require('react-bootstrap').Button;
var Well = require('react-bootstrap').Well;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Navbar = require('react-bootstrap').Navbar;
var NavDropdown = require('react-bootstrap').DropdownMenu;
var MenuItem = require('react-bootstrap').MenuItem;

var ImageGrid = require('./imagegrid');
var Map = require('./map');
var ImageActions = require('../actions/imageActions');
var CurrentLocation = require('./currentlocation');
var Search = require('./search');
var LocationList = require('./locationlist');

var Home = React.createClass({

  getInitialState(){

    // Extract the favorite locations from local storage

    var favorites = [];

    if (localStorage.favorites) {
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

  isAddressInFavorites: function (currentAddress) {
    //Todo make this a lodash usage, too many lines hurts my eyes
    var favorites = this.state.favorites;
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].address == currentAddress) {
        return true;
      }
    }
    return false;
  },

  toggleFavorite: function (address) {

    //notice the american spelling
    if (this.isAddressInFavorites(address)) {
      this.removeFromFavourites(address);
    } else {
      this.addToFavorites(address);
    }
  },

  removeFromFavourites: function (address) {
    //Todo: maybe use something similar to pluck? lodash is the way to go
    //I wonder what type of array elements favorite has -- A: {address, timestamp}
    //this.state.favorite.remove

    var favorites = this.state.favorites;
    var index = -1;
    for (var i = 0; i < favorites.length; i++) {
      if (favorites[i].address == address) {
        index = i;
        break;
      }
    }
    //the index is i, now we should splic it
    if (index !== -1) {
      favorites.splice(index, 1);

      //do a little update
      this.setState({
        favorites: favorites
      });

      localStorage.favorites = JSON.stringify(favorites);

    }
  },

  addToFavorites: function (address) {
    var favorites = this.state.favorites;
    var fav = {
      address: address,
      timestamp: Date.now()
    }

    favorites.push(fav);
    //do a little update
    this.setState({
      favorites: favorites
    });

    localStorage.favorites = JSON.stringify(favorites);

  },

  //this is just a function to test the functions are properly passed as properties
  sayHi: function () {
    alert('hi');
  },

  searchForAddress: function (address) {

    var self = this;

    // We will use GMaps' geocode functionality,
    // which is built on top of the Google Maps API

    GMaps.geocode({
      address: address,
      callback: function (results, status) {

        if (status !== 'OK') return;

        var latlng = results[0].geometry.location;

        self.setState({
          currentAddress: results[0].formatted_address,
          mapCoordinates: {
            lat: latlng.lat(),
            lng: latlng.lng()
          }
        });

      }
    });

  },

  //onFavoriteToggle is a prop for CurrentLocation, and it uses toggleFavorite
  render: function () {
    return (

      <div className="container">
        <Navbar>
          <Nav activeKey={1}>
            <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
        </Navbar>


        <Well>

          <h1>Travel Journal</h1>
          <Button bsStyle='primary' onClick={ImageActions.fetchList}>More Photos</Button>
          <Well>
            <Search onSearch={this.searchForAddress}/>

            <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>
            <CurrentLocation address={this.state.currentAddress}
                             favorite={this.isAddressInFavorites(this.state.currentAddress)}
                             onFavoriteToggle={this.toggleFavorite}/>
            <LocationList locations={this.state.favorites}
                          activeLocationAddress={this.state.currentAddress}
                          onClick={this.searchForAddress}
            ></LocationList>
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

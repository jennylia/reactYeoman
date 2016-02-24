var React = require('react');
var Button = require('react-bootstrap').Button;
var Well = require('react-bootstrap').Well;
var ImageGrid = require('./imagegrid');
var Map = require('./map');
var ImageActions = require('../actions/imageActions');

var Home = React.createClass({

  render: function() {
    return (
      <div className="container">
        <Well>

          <h1>Travel Journal</h1>
          <Button bsStyle='primary' onClick={ImageActions.fetchList}>More Photos</Button>
          <Well>
            <Map></Map>
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

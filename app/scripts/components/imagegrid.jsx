var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var ImageStore = require('../stores/imagestore');


var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
    if (this.state.imagestore) {
      return (
        <Row>

          <h1>Jenny</h1>
          {this.state.imagestore.map(function (image) {
            return (
              <Col xs={6} sm={4} lg={3}>
                <a href={ image.link }>
                  <img className="img-responsive flickr-thumbnail" src={ image.media.m }></img>
                </a>

              </Col>);
          })}

        </Row>
      );
    }
    else {
      return (<Row>Hello world</Row>);
    }
  }
});

module.exports = ImageGrid;

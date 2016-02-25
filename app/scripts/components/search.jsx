var React = require('react');

var Search = React.createClass({
  getInitialState(){
    return {value: ''};
  },

  handleSubmit: function (e) {
    e.preventDefault();
    console.log("handling submit")
    this.props.sayHi();
  },

  handleChange: function(){
    console.log("handle change");
  },

  render: function () {
    return (
      <div>
        <form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <div className="input-group">
              <input type="text" className="form-control" id="address" placeholder="Find a location..."/>

							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
            </div>
          </div>
      </div>

        </form>

      </div>
    );
  }
});

module.exports = Search;

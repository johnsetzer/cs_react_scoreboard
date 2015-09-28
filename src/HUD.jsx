'use strict'

var React = require('react');
var Scoreboard = require('./Scoreboard');
var KillLog = require('./KillLog');

module.exports = React.createClass({
  render: function() {
    return (
    	<div>
	      <Scoreboard cts={this.props.cts} terrorists={this.props.terrorists}/>
	      <KillLog kills={this.props.kills} />
      </div>
    );
  }
});
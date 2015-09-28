'use strict'

var React = require('react');

module.exports = React.createClass({
  render: function() {

    return (
      <tr>
      	<td>{this.props.name}</td>
      	<td>{this.props.isDead ? 'DEAD' : ''}</td>
      	<td>{this.props.plusMinus}</td>
      	<td>{this.props.kills}</td>
      	<td>{this.props.deaths}</td>
      	<td>{this.props.ping}</td>
      </tr>
    );
  }
});
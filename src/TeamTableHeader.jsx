'use strict'

var React = require('react');

module.exports = React.createClass({
  handleClick: function(event) {
    this.props.handleSort(event.target.dataset.columnName);
  },

  render: function() {
    return (
      <tr onClick={this.handleClick}>
        <td style={{width: '50%', borderBottom: '1px solid'}} data-column-name="name">{this.props.name}</td>
        <td style={{width: '10%', borderBottom: '1px solid'}} data-column-name="idDead">{this.props.isDead}</td>
        <td style={{width: '10%', borderBottom: '1px solid'}} data-column-name="plusMinus">{this.props.plusMinus}</td>
        <td style={{width: '10%', borderBottom: '1px solid'}} data-column-name="kills">{this.props.kills}</td>
        <td style={{width: '10%', borderBottom: '1px solid'}} data-column-name="deaths">{this.props.deaths}</td>
        <td style={{width: '10%', borderBottom: '1px solid'}} data-column-name="ping">{this.props.ping}</td>
      </tr>
    );
  }
});
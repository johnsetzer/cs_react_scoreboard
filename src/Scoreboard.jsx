'use strict'

var React = require('react');
var TeamTableHeader = require('./TeamTableHeader');
var TeamTable = require('./TeamTable');
var colors = require('./colors');

module.exports = React.createClass({
  getInitialState: function() {
    return { sortBy: 'name' };
  },

  handleSort: function (sortBy) {
    this.setState({ sortBy: sortBy });
  },

  render: function() {

    var width = 600;
    var height = 400;
    var scoreboardStyle = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      margin: '-' + (height/2) + 'px 0 0 -' + (width/2) + 'px',
      width: width + 'px',
      height: height + 'px',
      padding: '10px',
      color: colors.orange,
      border: '2px solid ' + colors.orange,
      borderRadius: '10px',
      backgroundColor: 'black',
      opacity: 0.7,
      zIndex: '1000'
    };

    var tableStyle = {
      width: '100%',
      margin: '5px 5px 5px 5px', // Tables don't respect padding
      color: colors.orange,
      borderCollapse: 'collapse'
    };

    var headerProps = {
      name: 'Killzone Match Server',
      isDead: '',
      plusMinus: '+/-',
      kills: 'KILLS',
      deaths: 'DEATHS',
      ping: 'PING',
      handleSort: this.handleSort
    };

    return (
      <div style={scoreboardStyle}>
        <table style={tableStyle}>
          <tbody>
            <TeamTableHeader {...headerProps} />
          </tbody>
        </table>
        <TeamTable
          name="Counter-Terrorists"
          players={this.props.cts}
          color={colors.blue}
          handleSort={this.handleSort}
          sortBy={this.state.sortBy}
        />
        <TeamTable
          name="Terrorists"
          players={this.props.terrorists}
          color={colors.red}
          handleSort={this.handleSort}
          sortBy={this.state.sortBy}
        />
      </div>
    );
  }
});
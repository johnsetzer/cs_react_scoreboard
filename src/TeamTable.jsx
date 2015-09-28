'use strict'

var React = require('react');
var TeamTableHeader = require('./TeamTableHeader');
var PlayerRow = require('./PlayerRow');
var _ = require('lodash');

module.exports = React.createClass({

  sortPlayers: function(players, sortBy) {
    var sortFuncs = {
      name: function (p) { return p.name.toLowerCase(); },
      plusMinus: function (p) { return p.plusMinus * -1; },
      kills: function (p) { return p.kills * -1; },
      deaths: function (p) { return p.deaths * -1; },
      ping: function (p) { return p.ping},
    };

    return _.sortBy(players, sortFuncs[sortBy]);
  },

  render: function() {

    var headerProps = {
      name: this.props.name + ' - ' + this.props.players.length + ' Players',
      isDead: '',
      plusMinus: this.avg('plusMinus'),
      kills: this.avg('kills'),
      deaths: this.avg('deaths'),
      ping: this.avg('ping'),
      handleSort: this.props.handleSort
    };

    var tableStyle = {
      width: '100%',
      margin: '20px 5px 5px 5px', // Tables don't respect padding
      color: this.props.color,
      borderCollapse: 'collapse'
    };

    var players = this.sortPlayers(this.props.players, this.props.sortBy);

    return (
      <table style={tableStyle}>
        
        <tbody>
          <TeamTableHeader {...headerProps} />
        
          {players.map(function(p) {
            return <PlayerRow key={p.name} {...p} />;
          })}
        </tbody>
        
      </table>
    );
  },

  avg: function (prop) {
    var players = this.props.players;
    
    var sum = _.sum(players, function(p) {
      return p[prop];
    });

    return Math.floor(sum / players.length);
  }
});
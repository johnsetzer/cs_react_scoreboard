'use strict'

var React = require('react');
var colors = require('./colors');

module.exports = React.createClass({
  render: function() {

    var listStyle = {
      width: '325px',
      padding: '10px 10px 10px 10px',
      color: 'orange',
      position: 'fixed',
      top: '0px',
      right: '0px',
      padding: '10px',
      backgroundColor: 'transparent',
      zIndex: '900',
      listStyleType: 'none',
      lineHeight: '25px'
    };

    var imgStyle = {
      paddingLeft: '5px',
      paddingRight: '5px',
      verticalAlign: 'middle'
    };

    return (
      <ul style={listStyle}>
      
        {this.props.kills.map(function (k) {
          var killerColor = k.killer.team === 'CT' ? colors.blue : colors.red;
          var victimColor = k.victim.team === 'CT' ? colors.blue : colors.red;
          var weapon = './images/' + k.weapon.toLowerCase() + '.png';

          return <li key={k.killer.name + '-' + k.victim.name}>
            <span style={{color: killerColor}}>{k.killer.name}</span>
            <img src={weapon} style={imgStyle} />
            <span style={{color: victimColor}}>{k.victim.name}</span>
          </li>
        })}
        
      </ul>
    );
  }
});
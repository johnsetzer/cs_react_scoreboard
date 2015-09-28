'use strict'

var React = require('react');

//****************************************
// React v0.13 killed some method names my copy of babel uses.
// HACK, HACK, HACK => Polyfill deprecated menthod names
//****************************************
React.renderComponent = React.render
React.renderComponentToString = React.renderToString
React.renderComponentToStaticMarkup = React.renderToStaticMarkup
React.isValidComponent = React.isValidElement
React.PropTypes.component = React.PropTypes.element
React.PropTypes.renderable = React.PropTypes.node

var fakeData = require('./fakeData');
var HUD = require('./HUD');

//****************************************
// Init App
//****************************************
var cts = fakeData.cts;
var terrorists = fakeData.terrorists;
var kills = [];

// First Render
var reactRoot = React.render(<HUD cts={cts} terrorists={terrorists} kills={kills}/>, document.getElementById('content'));

//****************************************
// Update Scoreboard ping on a timer.
//****************************************
var PING_INTERVAL = 1000;
var updatePing = function (player) {
	player.ping = fakeData.ping();
};

setInterval(function () {
	cts.forEach(updatePing);
	terrorists.forEach(updatePing);
	reactRoot.setProps({cts: cts, terrorists: terrorists});
}, PING_INTERVAL);

//****************************************
// Randomly kill people on a timer.
// Start new game when an entire team dies.
// Sums of plusMinus, kills, and deaths persist to next game.
//****************************************
var KILL_INTERVAL = 2000;
var reincarnate = function (player) {
	player.isDead = false;
};

var newGame = function (player) {	
	cts.forEach(reincarnate);
	terrorists.forEach(reincarnate);
	kills = [];
};

var killPlayer = function () {
	var liveCts = _.filter(cts, 'isDead', false);
	var liveTerrorists = _.filter(terrorists, 'isDead', false);

	if (liveCts.length === 0 || liveTerrorists.length === 0) {
		// Game over start a new game
		newGame();
	} else {
		// Kill a player
		var luckyCt = _.sample(liveCts);
		var luckyT = _.sample(liveTerrorists);
		var killer;
		var victim;

		// Flip a coin to see if CT kills T or visa versa
		if (Math.random() < 0.5) {
			killer = luckyCt;
			victim = luckyT;
		} else {
			killer = luckyT;
			victim = luckyCt;
		}

		killer.plusMinus += 1;
		killer.kills +=1;

		victim.plusMinus -= 1;
		victim.deaths -=1;
		victim.isDead = true;


		// Put commonly used guns in more often to weight the odds
		var guns = ['m4a1', 'm4a1', 'ak47', 'ak47', 'awp', 'awp', 'famas', 'deagle', 'usp', 'glock', 'knife'];

		var kill = {
			killer: killer,
			victim: victim,
			weapon: _.sample(guns)
		};

		kills.push(kill);
	}
	
	reactRoot.setProps({cts: cts, terrorists: terrorists, kills: kills});
	
	// Schedule another death
	setTimeout(killPlayer, KILL_INTERVAL);
};

// Schedule first death
setTimeout(killPlayer, KILL_INTERVAL);

var ping = function () {
	return Math.floor(Math.random() * 50) + 50;
}

var cts = [
	{
		name: 'Twinkie',
		team: 'CT',
		weapon: 'M4A1'
	},
	{
		name: 'Snow Ball',
		team: 'CT',
		weapon: 'M4A1'
	},
	{
		name: 'Pickles',
		team: 'CT',
		weapon: 'M4A1'
	},
	{
		name: 'Muffin',
		team: 'CT',
		weapon: 'M4A1'
	},
	{
		name: 'Cupcake',
		team: 'CT',
		weapon: 'M4A1'
	},
	{
		name: 'Peaches',
		team: 'CT',
		weapon: 'M4A1'
	}
];

var terrorists = [
	{
		name: 'The Big L',
		team: 'T',
		weapon: 'AK47'
	},
	{
		name: 'Buttercup',
		team: 'T',
		weapon: 'AK47'
	},
	{
		name: 'Sniffles',
		team: 'T',
		weapon: 'AK47'
	},
	{
		name: 'Mr. Biggles',
		team: 'T',
		weapon: 'AK47'
	},
	{
		name: 'Cuddle Bunny',
		team: 'T',
		weapon: 'AK47'
	},
	{
		name: 'Daffodil',
		team: 'T',
		weapon: 'AK47'
	}
];

var initKills = function (players) {
	players = players.map(function (p) {
		var killStats = {
			isDead: false,
			kills: 0,
			deaths: 0,
			plusMinus: 0,
			ping: ping()
		};

		return Object.assign({}, p, killStats);
	});

	return players;
};

cts = initKills(cts);
terrorists = initKills(terrorists);

module.exports.ping = ping;
module.exports.cts = cts;
module.exports.terrorists = terrorists;
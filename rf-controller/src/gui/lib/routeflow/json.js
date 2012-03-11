{ "nodes": [
	{
		"id": "rf-server",
		"name": "RouteFlow Server",
		"adjacencies": [
			{
				"nodeTo": "controller",
				"nodeFrom": "rf-server",
				"data": {
					"$color": "#145D80"
				}
			}
		],
		"data": {
			"$type": "rf-server",
			"timer": 1331412354,
			"$dim": 20,
			"$x": -50,
			"$y": -170,
			"latitude": -20.950884,
			"longitude": -42.775578
		}
	},
	{
		"id": "controller",
		"name": "Controller",
		"adjacencies": [],
		"Label": {
			"$color": "#"
		},
		"data": {
			"$type": "controller",
			"timer": 1331412354,
			"$dim": 25,
			"$x": 100,
			"$y": -170,
			"latitude": -21.002466,
			"longitude": -45.062749
		}
	},
	{
		"id": "5",
		"name": "switch5",
		"adjacencies": [
			{
				"nodeTo": "controller",
				"nodeFrom": "5",
				"data": {
					"$color": "#145D80"
				}
			},
			{
				"nodeTo": "6",
				"nodeFrom": "5",
				"data": {
					"$color": "#010101"
				}
			},
			{
				"nodeTo": "7",
				"nodeFrom": "5",
				"data": {
					"$color": "#010101"
				}
			},
			{
				"nodeTo": "8",
				"nodeFrom": "5",
				"data": {
					"$color": "#010101"
				}
			}
		],
		"data": {
			"$type": "of-switch",
			"timer": 1331412354,
			"$dim": 20,
			"latitude": -15,
			"longitude": -41
		}
	},
	{
		"id": "6",
		"name": "switch6",
		"adjacencies": [
			{
				"nodeTo": "controller",
				"nodeFrom": "6",
				"data": {
					"$color": "#145D80"
				}
			},
			{
				"nodeTo": "5",
				"nodeFrom": "6",
				"data": {
					"$color": "#010101"
				}
			},
			{
				"nodeTo": "8",
				"nodeFrom": "6",
				"data": {
					"$color": "#010101"
				}
			}
		],
		"data": {
			"$type": "of-switch",
			"timer": 1331412354,
			"$dim": 20,
			"latitude": -23,
			"longitude": -40
		}
	},
	{
		"id": "7",
		"name": "switch7",
		"adjacencies": [
			{
				"nodeTo": "controller",
				"nodeFrom": "7",
				"data": {
					"$color": "#145D80"
				}
			},
			{
				"nodeTo": "5",
				"nodeFrom": "7",
				"data": {
					"$color": "#010101"
				}
			},
			{
				"nodeTo": "8",
				"nodeFrom": "7",
				"data": {
					"$color": "#010101"
				}
			}
		],
		"data": {
			"$type": "of-switch",
			"timer": 1331412354,
			"$dim": 20,
			"latitude": -19,
			"longitude": -40
		}
	},
	{
		"id": "8",
		"name": "switch8",
		"adjacencies": [
			{
				"nodeTo": "controller",
				"nodeFrom": "8",
				"data": {
					"$color": "#145D80"
				}
			},
			{
				"nodeTo": "5",
				"nodeFrom": "8",
				"data": {
					"$color": "#010101"
				}
			},
			{
				"nodeTo": "6",
				"nodeFrom": "8",
				"data": {
					"$color": "#010101"
				}
			},
			{
				"nodeTo": "7",
				"nodeFrom": "8",
				"data": {
					"$color": "#010101"
				}
			}
		],
		"data": {
			"$type": "of-switch",
			"timer": 1331412354,
			"$dim": 20,
			"latitude": -21,
			"longitude": -41
		}
	}]}
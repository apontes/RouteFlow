{ "nodes": [
	{
		"id": "5",
		"name": "switch5",
		"data": {
			"$dp_id": "dp1",
			"$flows": [
			{
				"flow": "0",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 10.0.0.2",
				"ofp_actions": "SET_DL_DST: aa:a7:bd:28:69:f4; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "1",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 30.0.0.3",
				"ofp_actions": "SET_DL_DST: c6:45:9d:ed:6a:71; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "2",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 50.0.0.4",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 4; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "3",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 172.31.1.100",
				"ofp_actions": "SET_DL_DST: be:ab:1d:64:3c:b4; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 1; ",
				"packet_count": "6",
				"byte_count": "588"
			},
			{
				"flow": "4",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 20.0.0.0/24",
				"ofp_actions": "SET_DL_DST: c6:45:9d:ed:6a:71; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "5",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 40.0.0.0/24",
				"ofp_actions": "SET_DL_DST: aa:a7:bd:28:69:f4; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "6",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 172.31.2.0/24",
				"ofp_actions": "SET_DL_DST: aa:a7:bd:28:69:f4; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 2; ",
				"packet_count": "4",
				"byte_count": "392"
			},
			{
				"flow": "7",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 172.31.3.0/24",
				"ofp_actions": "SET_DL_DST: c6:45:9d:ed:6a:71; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 3; ",
				"packet_count": "6",
				"byte_count": "588"
			},
			{
				"flow": "8",
				"ofp_match": "ip, dl_dst: 52:69:a2:fe:02:9c; nw_dst: 172.31.4.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: 52:69:a2:fe:02:9c; OUTPUT: port 4; ",
				"packet_count": "4",
				"byte_count": "392"
			},
			{
				"flow": "9",
				"ofp_match": "udp, nw_dst: 224.0.0.9",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "10",
				"ofp_match": "nw_proto: OSPF; tp_src: 0; tp_dst: 0",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "931",
				"byte_count": "77734"
			}
			],
			"$ofp_desc_stats":["Nicira Networks, Inc.", "Open vSwitch", "1.0.1", "None", "None"],
			"$ofp_aggr_stats":["951", "79694", "11"],
			"$ofp_table_stats":[["0", "hash", "0", "1955"],["1", "classifier", "20", "0"]]
		}
	},
	{
		"id": "6",
		"name": "switch6",
		"data": {
			"$dp_id": "dp2",
			"$flows": [
			{
				"flow": "0",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 10.0.0.1",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "1",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 40.0.0.4",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "2",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 172.31.2.100",
				"ofp_actions": "SET_DL_DST: 9e:9c:e4:f3:ae:7d; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 1; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "3",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 20.0.0.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "4",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 30.0.0.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "5",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 50.0.0.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "6",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 172.31.1.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 2; ",
				"packet_count": "2",
				"byte_count": "196"
			},
			{
				"flow": "7",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 172.31.3.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "8",
				"ofp_match": "ip, dl_dst: aa:a7:bd:28:69:f4; nw_dst: 172.31.4.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: aa:a7:bd:28:69:f4; OUTPUT: port 3; ",
				"packet_count": "2",
				"byte_count": "196"
			},
			{
				"flow": "9",
				"ofp_match": "udp, nw_dst: 224.0.0.9",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "10",
				"ofp_match": "nw_proto: OSPF; tp_src: 0; tp_dst: 0",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "627",
				"byte_count": "52670"
			}
			],
			"$ofp_desc_stats":["Nicira Networks, Inc.", "Open vSwitch", "1.0.1", "None", "None"],
			"$ofp_aggr_stats":["631", "53062", "11"],
			"$ofp_table_stats":[["0", "hash", "0", "1312"],["1", "classifier", "20", "0"]]
		}
	},
	{
		"id": "7",
		"name": "switch7",
		"data": {
			"$dp_id": "dp3",
			"$flows": [
			{
				"flow": "0",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 30.0.0.1",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "1",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 20.0.0.4",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "2",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 172.31.3.100",
				"ofp_actions": "SET_DL_DST: 46:38:4d:8f:86:aa; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 1; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "3",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 10.0.0.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "4",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 40.0.0.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "5",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 50.0.0.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "6",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 172.31.1.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 3; ",
				"packet_count": "2",
				"byte_count": "196"
			},
			{
				"flow": "7",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 172.31.2.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "8",
				"ofp_match": "ip, dl_dst: c6:45:9d:ed:6a:71; nw_dst: 172.31.4.0/24",
				"ofp_actions": "SET_DL_DST: f2:9b:ac:ea:1a:f7; SET_DL_SRC: c6:45:9d:ed:6a:71; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "9",
				"ofp_match": "udp, nw_dst: 224.0.0.9",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "10",
				"ofp_match": "nw_proto: OSPF; tp_src: 0; tp_dst: 0",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "539",
				"byte_count": "45070"
			}
			],
			"$ofp_desc_stats":["Nicira Networks, Inc.", "Open vSwitch", "1.0.1", "None", "None"],
			"$ofp_aggr_stats":["541", "45266", "11"],
			"$ofp_table_stats":[["0", "hash", "0", "1134"],["1", "classifier", "20", "0"]]
		}
	},
	{
		"id": "8",
		"name": "switch8",
		"data": {
			"$dp_id": "dp4",
			"$flows": [
			{
				"flow": "0",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 50.0.0.1",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 4; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "1",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 40.0.0.2",
				"ofp_actions": "SET_DL_DST: aa:a7:bd:28:69:f4; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "2",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 20.0.0.3",
				"ofp_actions": "SET_DL_DST: c6:45:9d:ed:6a:71; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "3",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 172.31.4.100",
				"ofp_actions": "SET_DL_DST: 0e:d5:16:ff:d7:55; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 1; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "4",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 10.0.0.0/24",
				"ofp_actions": "SET_DL_DST: aa:a7:bd:28:69:f4; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 2; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "5",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 30.0.0.0/24",
				"ofp_actions": "SET_DL_DST: c6:45:9d:ed:6a:71; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "6",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 172.31.1.0/24",
				"ofp_actions": "SET_DL_DST: 52:69:a2:fe:02:9c; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 4; ",
				"packet_count": "2",
				"byte_count": "196"
			},
			{
				"flow": "7",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 172.31.2.0/24",
				"ofp_actions": "SET_DL_DST: aa:a7:bd:28:69:f4; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 2; ",
				"packet_count": "2",
				"byte_count": "196"
			},
			{
				"flow": "8",
				"ofp_match": "ip, dl_dst: f2:9b:ac:ea:1a:f7; nw_dst: 172.31.3.0/24",
				"ofp_actions": "SET_DL_DST: c6:45:9d:ed:6a:71; SET_DL_SRC: f2:9b:ac:ea:1a:f7; OUTPUT: port 3; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "9",
				"ofp_match": "udp, nw_dst: 224.0.0.9",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "0",
				"byte_count": "0"
			},
			{
				"flow": "10",
				"ofp_match": "nw_proto: OSPF; tp_src: 0; tp_dst: 0",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "841",
				"byte_count": "70538"
			}
			],
			"$ofp_desc_stats":["Nicira Networks, Inc.", "Open vSwitch", "1.0.1", "None", "None"],
			"$ofp_aggr_stats":["845", "70930", "11"],
			"$ofp_table_stats":[["0", "hash", "0", "1773"],["1", "classifier", "20", "0"]]
		}
	},
	{
		"id": "150871840975",
		"name": "switch150871840975",
		"data": {
			"$dp_id": "dp5",
			"$flows": [
			{
				"flow": "0",
				"ofp_match": "",
				"ofp_actions": "OUTPUT: port 65533; ",
				"packet_count": "5273",
				"byte_count": "423912"
			}
			],
			"$ofp_desc_stats":["Nicira Networks, Inc.", "rfovs", "1.1.0", "None", "None"],
			"$ofp_aggr_stats":["5273", "423912", "1"],
			"$ofp_table_stats":[["0", "classifier", "1", "0"]]
		}
	}
]}
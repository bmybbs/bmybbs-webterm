const WebSocket = require("ws");
const SocketService = require("./service.js");

const wss = new WebSocket.Server({ port: 8086 });

wss.on("connection", ws => {
	console.log("connected");

	new SocketService(ws);
});


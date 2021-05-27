const PTY = require("./pty.js");

class SocketService {
	/**
	 * @param {WebSocket} socket
	 */
	constructor(socket) {
		this.socket = socket;
		this.pty = new PTY(this.socket);

		this.socket.onclose = evt => {
			// TODO
		};

		this.socket.onmessage = evt => {
			this.pty.write(evt.msg);
		};
	}
}

module.exports = SocketService;


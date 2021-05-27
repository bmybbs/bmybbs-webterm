const pty = require("node-pty");

class PTY {
	/**
	* @param {WebSocket} socket
	*/
	constructor(socket) {
		this.shell = "/home/bbs/bin/bbs";
		this.ptyProcess = null;
		this.socket = socket;
		this.startPtyProcess();
	}

	startPtyProcess() {
		this.ptyProcess = pty.spawn(this.shell, ["d", "127.0.0.1" /* TODO */], {
			name: "xterm-color",
			cwd: process.env.HOME,
			env: process.env,
			encoding: null,
		});

		console.log(`Start bbs PID: ${this.ptyProcess.pid}`);

		this.ptyProcess.onData(data => {
			this.socket.send(data);
		});
	}

	/**
	* @param {string} data
	*/
	write(data) {
		this.ptyProcess.write(data);
	}
};

module.exports = PTY;

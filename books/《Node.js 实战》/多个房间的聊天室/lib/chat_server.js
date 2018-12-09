var socketio = require('socket.io');

var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function(server) {
	io = socketio.listen(server);
	io.set('log level', 1);

	io.sockets.on('connection', function(socket) {
		guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
		joinRoom(socket, 'Lobby');

		handleMessageBroadcasting(socket, nickNames);
		handleNameChangeAttempts(socket, nickNames, nameUsed);
		handleRoomJoining(socket);

		socket.on('rooms', function() {
			socket.emit('rooms', io.sockets.manager.rooms);
		});
		handleClientDisconnection(socket, nickNames, namesUsed);
	});
};


function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
	var name = 'Guest' + guestNumber;               // 生成新昵称
	nickNames[socket.id] = name;                    // 把用户昵称跟客户端连接ID关联上
	socket.emit('nameResult', {                     // 让用户知道他们的昵称
		success: true,
		name: name
	});
	namesUsed.push(name);                           // 存放已经被占用的昵称
	return guestNumber + 1;                         // 增加用来生成昵称的计数器
}

function joinRoom(socket, room) {
	socket.join(room);
	currentRoom[socket.id] = room;
}
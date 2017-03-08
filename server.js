var app = require('express')();
var http = require('http').Server(app);
// 引入websocket插件
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log('already connect');

	// 监测连接是否断开
	socket.on('disconnect', function() {
		console.log('connect close');
	})

	// 监测前端发送的msg信息
	socket.on('msg', function(obj) {
		// 返回response
		io.emit('response', obj);
		console.log(obj)
	})
});

var server = http.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('应用实例，访问地址 ws://%s:%s', host, port);
})
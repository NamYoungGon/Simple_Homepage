var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use('/', express.static(__dirname + '/../build'));

server.listen(3000, () => {
    console.log("port 3000")
});

io.sockets.on('connection', function (socket) {

    io.emit('message', {
        message: 'Hi Friend',
        userNo: -9999
    });

    // Join Room
    socket.on('join', function (data) {
        var roomNo = data.roomNo || "",
            userNo = data.userNo || "";
        console.log(roomNo + "번방에 " + userNo + "번 손님이 접속하셨습니다.");
        socket.join('room' + roomNo);
    });

    socket.on('message', function (data) {
        var roomNo = data.roomNo || "",
        userNo = data.userNo || "";
        console.log("roomNo :" + roomNo + ", userNo : " + userNo + ", message : " + data.message);
        io.sockets.in('room' + roomNo).emit('message', {
            message: data.message,
            roomNo: roomNo,
            userNo: userNo

        });
    });

});
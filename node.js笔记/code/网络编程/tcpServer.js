var net = require('net');

var server = net.createServer(function(socket) {
  socket.on('data',function (data) {
    socket.write('你好');
  });
  socket.on('end',function(){
    console.log('连接断开');
  });
  socket.write('你好，你正在学TCP');
});

server.listen(8000,function () {
  console.log('server bound');
});

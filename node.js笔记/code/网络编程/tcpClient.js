var net = require('net');
var client = net.connect({port:8224},function(){
  console.log('client connected');
  client.write('wolrd!\r\n');
});

client.on('data',function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end',function() {
  console.log('client disconnected');
});

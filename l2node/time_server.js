var net = require('net');

function defZero(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + defZero(d.getMonth() + 1) + "-"
    + defZero(d.getDate()) + " "
    + defZero(d.getHours()) + ":"
    + defZero(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
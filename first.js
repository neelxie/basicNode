var http = require('http');
var dty = require('./mydate');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Greatest Coder Ever!');
  res.write("The date and time are currently at: " + dty.myDateTime());
  res.end();
}).listen(8080);
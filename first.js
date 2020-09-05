var http = require('http');
var mydt = require('./mydate');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently at: " + mydty.myDateTime());
  res.end('Greatest Coder Ever!');
}).listen(8080);

//
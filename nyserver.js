//server file
var http = require('http');
var url = require('url');
var fs = require('fs');

//create a server object:
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var qq = url.parse(adr, true);


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Remnant Greatest Coder!'); //write a response to the client
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " and " + q.month;
  console.log(qq.host); //returns 'localhost:8080'
  console.log(qq.pathname); //returns '/default.htm'
  console.log(qq.search); //returns '?year=2017&month=february'

  var qdata = qq.query; //returns an object: { year: 2017, month: 'february' }
  console.log(qdata.month); //returns 'february'

  //end the response
  res.end(txt); 
  //the server object listens on port 8080
}).listen(8080);

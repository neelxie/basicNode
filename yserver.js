// add server file
var http = require('http');
var url = require('url');
var fs = require('fs');
var events = require('events');
var formidable = require('formidable');
// this is not being used

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  var eventEmitter = new events.EventEmitter();

  //Create an event handler:
  var myEventHandler = function () {
    // you can add what you want handled here
    console.log('I hear a scream!');
  }

  //Assign the event handler to an event:
  eventEmitter.on('scream', myEventHandler);

  //Fire the 'scream' event:
  eventEmitter.emit('scream');

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("Page 404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    // you could structure this better
    res.write(data);
    return res.end();
  });
}).listen(8080);

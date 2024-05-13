// Create web server

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log('request received');
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.readFile('index.html', function(err, data) {
    response.end(data);
  });
});

// Listen on port 8000, IP defaults to
var http = require('http');
var url = require('url');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(3333);


// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'}); 
//   var q = url.parse(req.url, true).query;
//   var txt = q.name + " " + q.lastname;
//   res.end(txt);
// }).listen(3333);


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(3333);

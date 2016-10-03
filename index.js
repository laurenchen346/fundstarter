var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('public/index.html',{root:__dirname});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
}).listen(8080);

console.log("Server Running on 8080");


var http = require("http");
var fs = require("fs");


http.createServer(function(request,response) {
    
    fs.readFile('public/index.html',{root:__dirname}, function(err, file) {
        if (err) {
            response.writeHeader(404, {"Content-Type":"text/plain"});
            response.write("404 Not Found\n");
            response.end();
        } else {
            response.writeHeader(200);
            response.write(file);
            response.end();
        }
    });
}).listen(8080);

console.log("Server Running on 8080");

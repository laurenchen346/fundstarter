var http=require("http");
var fs=require("fs");
var fileName="public/index.html";


http.createServer(function(request,response) {
  
fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
            var buffer=new Buffer(stats.size);
            fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
        if (error) {
            response.writeHeader(404, {"Content-Type":"html"});
            response.write("404 Not Found\n");
            response.end();
        } else {
            response.writeHeader(200);
            response.write(buffer);
            response.end();
        }
    });

          fs.close(fd);
    
      });
    });
  }
});
}).listen(8080);

console.log("Server Running on 8080");

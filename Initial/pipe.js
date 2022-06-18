//Reading the data in big file and piping it to the client

var http = require("http");
var fs = require("fs");

// myReadStream.pipe(myWriteStream);
var server = http.createServer(function (req, res) {
  console.log("request was made : " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/stream.txt", "utf-8");
  //   var myWriteStream = fs.createWriteStream(__dirname + "/writeStream.txt");
  myReadStream.pipe(res);
  //   res.end("Hello from Node server!!");
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000..");

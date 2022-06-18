var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request was made at : " + req.url);
  res.writeHead(200, { "Content-type": "application/json" });
  var myObj = {
    Name: "Jithin",
    Course: "BTech",
    Age: "19",
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000..");

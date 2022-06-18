var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  console.log("request was made at : " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact-us") {
    res.writeHead(200, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/jj") {
    res.writeHead(200, { "Content-type": "application/json" });
    var myObj = [
      { Name: "JJ", Age: 19 },
      { Name: "Unknown", Age: 20 },
    ];
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("Listening to port 3000..");

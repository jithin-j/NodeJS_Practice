var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/stream.txt", "utf-8");
var myWriteStream = fs.createWriteStream(__dirname + "/writeStream.txt");

myReadStream.on("data", function (chunk) {
  console.log("New chunk received: ");
  myWriteStream.write(chunk);
});

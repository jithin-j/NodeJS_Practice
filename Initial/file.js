var fs = require("fs");

//Synchronous functions = next step will happen only after completion of synchronous functions
// data = fs.readFileSync("readMe.txt", "utf8");
// console.log(data);
// fs.writeFileSync("writeMe.txt", data);

//async method
fs.readFile("readMe.txt", "utf8", function (err, data) {
  console.log(data);
});
console.log("async test"); //This will print first before file output is logged

fs.writeFile("writeMeAsync.txt", "Async file text", function (err, _data) {});

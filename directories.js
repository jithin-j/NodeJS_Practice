var fs = require("fs");

//Create directory Stuff, Read file from readMe.txt and write it into a text file stuff.txt
//Inside the stuff directory
fs.mkdir("stuff", function () {
  fs.readFile("readMe.txt", "utf8", function (err, data) {
    fs.writeFile("./stuff/stuff.txt", data, function (err, _data) {});
  });
});

//To remove the directory, the directory contents have to be removed first
//To remove files use unlink
fs.unlink("./stuff/stuff.txt", function (err) {
  fs.rmdir("stuff", function (err) {});
});

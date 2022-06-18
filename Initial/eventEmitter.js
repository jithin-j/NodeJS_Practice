const events = require("events");
const { futimesSync } = require("fs");

class person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

var James = new person("James");
var Mary = new person("Mary");
var Ryu = new person("Ryu");
var people = [James, Mary, Ryu];

people.forEach(function (person) {
  person.on("speak", function (mssg) {
    console.log(person.name + "said: " + mssg);
  });
});

James.emit("speak", "Hey World! I was emitted from an event!");
Ryu.emit("speak", "Me too!");

function callfunction(fun) {
  fun();
}

//function expression
var sayBye = function () {
  console.log("Bye");
};

callfunction(sayBye);

const fs = require("fs");
const https = require("https");

var a = 10;
var b = 20;

setImmediate(() => {
  console.log("I'm SetImmediate");
});

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(data);
});

setTimeout(() => {
  console.log("I'm SetTime out");
}, 0);

function printA(a, b) {
  console.log(a * b);
}

printA(a, b);

console.log("Last Line of the Code");

// 200
// Last Line of the Code
// I'm SetTime out
// I'm SetImmediate
// Hi, My name is File.

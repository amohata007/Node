const { x, sum } = require("./xyz.js");
const { calMultiply, calDivide } = require("./Calculate"); //no need for index.js path

let a = 20;
let b = 10;
sum(a, b);
calMultiply(a, b);
calDivide(a, b);

console.log("Hello World from Node JS", x);

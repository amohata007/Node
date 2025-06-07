const fs = require("fs");
const https = require("https");
const { calMultiply } = require("./Calculate");
const crypto = require("node:crypto");

console.log("I'm started!!");

var a = 10;
var b = 20;

//It will bloock the main thread
const crypData = crypto.pbkdf2Sync("pass149", "salt", 500000, 500, "sha512");
console.log("I'm Crypto Data", crypData);

//It will bloock the main thread
const data = fs.readFileSync("./file.txt", "utf-8");
console.log("This will execute after file read", data);

https.get("https://dummyjson.com/products/1", (data) => {
  console.log("I'm https");
});

setTimeout(() => {
  console.log("Logged after 3 secs");
}, 3000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log(data, "I'm Read!!");
});

calMultiply(a, b);

console.log("I'm Done!!");

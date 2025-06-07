const fs = require("fs");
const https = require("https");
const { calMultiply } = require("./Calculate");
const crypto = require("node:crypto");

//Output
// I'm started!!
// I'm Crypto Data <Buffer c6 ac ec da a8 37 a4 a4 ec d5 9f 93 dc cf ea 45 84 b4 f6 dd 7a 8d 77 7f 40 4f ef f3 0d c0 95 4d e8 23 08 58 34 73 51 57 7b b3 96 48 5b 37 2e a4 24 51 ... 450 more bytes>
// This will execute after file read Hi, My name is File.
// 200
// I'm Done!!
// Hi, My name is File. I'm Read!!
// I'm https
// Logged after 3 secs

console.log("I'm started!!");

var a = 10;
var b = 20;

//It will block the main thread
const crypData = crypto.pbkdf2Sync("pass149", "salt", 500000, 500, "sha512");
console.log("I'm Crypto Data", crypData.toString("hex"));

//It will block the main thread
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

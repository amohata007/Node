const crypto = require("crypto");

//By Default Thread Pool is 4, to Modify -
process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("pass149", "salt", 50000, 500, "sha512", (err, data) => {
  console.log("I'm Crypto 1");
});

crypto.pbkdf2("pass149", "salt", 50000, 500, "sha512", (err, data) => {
  console.log("I'm Crypto 2");
});

crypto.pbkdf2("pass149", "salt", 50000, 500, "sha512", (err, data) => {
  console.log("I'm Crypto 3");
});

crypto.pbkdf2("pass149", "salt", 50000, 500, "sha512", (err, data) => {
  console.log("I'm Crypto 4");
});

crypto.pbkdf2("pass149", "salt", 50000, 500, "sha512", (err, data) => {
  console.log("I'm Crypto 5");
});

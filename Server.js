const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/about") {
    res.end("About Page");
  }
  res.end("Hello World!!");
});

server.listen(7777);

const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    if (req.url == "/todos" && req.method == "GET") {
      res.write(JSON.stringify(["react", "express"]));
      res.end();
    } else if (req.url == "/todos" && req.method == "POST") {
      res.write("create new todos...");
      res.end();
    }
  })
  .listen(8000);

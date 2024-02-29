const path = require("path");
const http = require("http");
// const createUser = require("./auth")
const auth = require("./auth");
const products = require("./products");

products.createProducts();
products.fetchProducts();



console.log(path.join(__dirname, "uploads"));

auth.login("ram", "ram@gmail.com", "ram123");
auth.signup("ram", "ram@gmail.com", "ram123");

// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     console.log(req.method);
//     if (req.url == "/todos" && req.method == "GET") {
//       res.write(JSON.stringify(["react", "express"]));
//       res.end();
//     } else if (req.url == "/todos" && req.method == "POST") {
//       res.write("create new todos...");
//       res.end();
//     } else if (req.url == "/login" && req.method == "POST") {
//       auth.login("ram", "ram@gmail.com", "ram123");
//       res.write("create new todos...");
//       res.end();
//     } else if (req.url == "/signup" && req.method == "POST") {
//       auth.signup("ram", "ram@gmail.com", "ram123");

//       res.write("create new todos...");
//       res.end();
//     }
//     })
//   .listen(8000);


// const retrieveProducts = require("./products")
// retrieveProducts();


/* named exports */
const product = require("./products")

console.log(product);
product.retrieve();
product.store();
const express = require("express");
const app = express() 
 
app.get("/api/todos", (req,res) =>{
    console.log("send todos..");
    let todos = ["html","css","js"];
    res.send(todos)
})

app.post("/api/todos", (req,res) => {
    res.send("todos created")
} )

app.get("/api/products", (req,res) => {
    let products = ["samsung","apple"];
    res.send(products);
})

app.listen(8000, () => {
    console.log("server started");
});


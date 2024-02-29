const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); // global middleware

const Book = require("./model/Book");
const Author = require("./model/Author");

mongoose
  .connect("mongodb://127.0.0.1:27017/bookStore")
  .then(() => console.log("Connected!"));


/* app.get("/api/books",(req,res) => {
    // db.books.find()
    Book.find({}).then( (data) => {
        console.log(data);
        res.send(data)
    })
})   */
app.get("/api/books", async (req, res, next) => {
  // db.books.find()
  try {
    let books = await Book.find({});
    res.send(books);
  } catch (err) {
    return next(err);
  }
});

/* app.get("/api/authors", async (req,res,next) => {
  try{
    let authors = await Author.find({});
    res.send(authors);
  } catch (err) {
    return next(err);
  }
});
*/



/* client side validation */

app.post("/api/books", async (req, res, next) => {
  /* db.books.insertOne */
  try {
    let { title, isbn , author } = req.body;

    /* server side validation */
   /*  if (!title) {
      //title will be undefined and it is falsy value
      return res.status(400).send("title is required.");
    } */

    let book = await Book.create({ title, isbn , author }); //key ra value same so title:title is same thing
    res.send(book);
  } catch (err) {
    return next(err);
  }
});

app.post("/api/authors", async (req, res, next) => {
  try {
    let author = await Author.create({
      name: "hari"
    });
    res.send(author);
  } catch (err) {
    return next(err);
  }
}); 


/*  
Book.findByIdAndUpdate("asfds..",{})
Book.findByIdAndDelete("asfds..")
*/

app.put("/api/books/:_id", async (req, res, next) => {
  try {
    let id = req.params._id;

    /* checking avaibility of id in db */
    let matched = await Book.findById(id); //null if not available
    if(!matched){
      return res.status(404).send();
    }
    else{

    let { title, isbn } = req.body;
    let book = await Book.findByIdAndUpdate(id, { title, isbn }, { new: true, runValidators: true }); // {new.true} vanya kei ni haina just instant res ma data load garauna runValidators le chai schema ko ma gareko title required lai lincha ani title yedi pathayena vane err falcha (SCHEMA MODEL VALIDATION CHECKS TO UPDATE)
    res.send(book);
    }
  } 

  catch (err) {
    return next(err);
  }
});

app.delete("/api/books/:_id", async (req, res,next) => {
  try {
    let id = req.params._id;
    let book = await Book.findByIdAndDelete(id);
    res.status(204).send("");
  } catch (err) {
    return next(err);
  }
});

/* valid middlewares */
/* mathi ko sab invalid vo vane yo block chalcha */
app.use((req, res) => {
  res.status(404).send({ msg: "resource not found" });
});
/* handle server error // yo block chai jaba next ma err vanne object pass huncha taba chalcha */
app.use((err, req, res, next) => {
  let statusCode = 500;
  let msg = "server error";
  let error = "backend fault";

  if (err.name == "ValidationError") {
    statusCode = 400;
    msg = "Bad Request / Please check your form";
     error = {
      title: "title is required",
      isbn:"isbn should be number"
    };
  }

  res.status(statusCode).send({
    msg,
    error
  });
});

app.listen(8000, () => {
  console.log("server started");
});


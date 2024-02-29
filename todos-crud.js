const express = require("express");
const app = express();

const { checkAuthentication, checkValidRole } = require("./middleware/auth");

let todos = [
  {
    id: 1,
    title: "html",
    status: true,
  },
  {
    id: 2,
    title: "express",
    status: false,
  },
];

// obj destructuring

// const {checkAuthentication,checkValidRole} = auth_middleware;
/* middleware
    - simply a function with req and res access
    -next: points to the next upcoming middleware
 */

/* 
app.use(checkAuthentication); // global middleware.
app.use(checkValidRole); */
// not invoked cause it will return undef
app.use(express.json()); //sets up req.body// () =>{return (req,res,next)=>{ req.body = postman body }} // sab route ma chalcha

/* action middlewares */
app.get("/api/todos", (req, res) => {
  console.log("response: list of todos");
  res.send(todos);
});

const createTodos = (req, res) => {
  let inputTitle = req.body.title?.trim(); //? is optional chaining, title vanne obj ma cha vane trim garcha, chaina vane undef return garcha
  // empty: falsy value, a white space : truthy value

  let matched = todos.some((el) => el === inputTitle); //some returns boolean whereas find returns element

  if (matched) {
    return res.status(400).send({
      errors: [
        {
          key: "title",
          msg: "title already exists",
        },
      ],
    });
  }

  if (!inputTitle) {
    return res.status(400).send({
      errors: [
        {
          key: "title",
          msg: "this field is required.",
        },
      ],
    });
  }

  todos.push(req.body.title);
  return res.send("todos created");
};

/* route level middleware */
app.post("/api/todos", checkAuthentication, checkValidRole, createTodos);



app.delete("/api/todos/:id", (req, res) => {

  let output = todos.filter(el => el.id !== parseInt(req.params.id)); // filter uses boolean to pick up the element into the array 
  console.log(output);
  res.send(output);
});



app.put("/api/todos/:id", (req, res) => {
  
  let existingTodos = todos.find(el => el.id == req.params.id)

  if(!existingTodos){
    return res.status(404).send()
  }
  todos  = todos.map((el) => {
    if(el.id == req.params.id){
      let newData = {
        id: req.params.id,
        title: req.body.title,
        status: req.body.status,
      };
      return newData;
    }
       else{
        return el
      }
  })
  res.send(todos);
});

app.delete(
  "/api/todos/reset",
  checkAuthentication,
  checkValidRole,
  (req, res) => {
    todos = [];
    return res.status(204).send("todos reseted");
  }
);

app.listen(8000, () => {
  console.log("server started...");
});

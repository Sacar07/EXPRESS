let matched = false;
let todos = [{
    id: 1,
    name:"html"},
    {
    id:2,
    name: "css"
}]

let inputTitle = "html"

let output = todos.some(el=>el.name == inputTitle) 

console.log(output);

console.log(matched);


let outputt = todos.filter(el => el.id !== 2 )
console.log(outputt);

todos.push(
    {id:3,
    title: "git"}
)

console.log(todos);


let classes = [
    {
        grade:1,
        sections:[
            {
                name:"A",
                classTeacher: "abc",
                students: {
                    name: "ram",
                    age:11
                }
            }
        ]
    }
]


/* 
    show dbs -- sir's repo/ syllabus
 */

db.createCollection("books");
db.books.insertOne({ name: "python", isbn: 251535 });
db.books.insertMany([
  { name: "javascript", isbn: 2222 },
  { name: "java", isbn: 3333 },
]);

db.books.insertOne({ name: "ruby", isbn: 4444, publishedDate: "2023-01-22" });


db.books.find()
db.books.find({name:"ruby"})
// db.books.find(filter)

// $set is one of update operator
db.books.updateOne({name:"ruby"},{$set : {name:"ruby and rails"}})

 db.books.find({isbn:2222},{name:1,isbn:1})
 db.books.find({isbn:2222},{name:1})
 db.books.find({isbn:2222},{_id:0,name:1}) // if no _id needed
 db.books.find({},{name:1})
 db.books.find({_id:"65d5dbffe74c105b23e3e6c0"})
 db.books.find({_id:ObjectId("65d5dbffe74c105b23e3e6c0")})

 /* update operators $set $unset $ince */
 db.books.updateOne({isbn:3333},{$set:{name:"advanced java programming"}})

 db.books.updateMany({},{$set:{publishedDate:2023}})
 db.books.updateMany({isbn: 2222},{$unset:{publishedDate:1}})

 db.books.insertOne({
    name:"java",
    publisher:{
        name:"name",
        estd:2020
    },
    authors:[
        {
            name:"Ram"
        },
        {
            name:"Shyam"
        }
    ]
 })

 db.books.deleteOne({isbn:3333})
 db.books.deleteMany({isbn:3333})

 db.books.insertMany([
    {
        name:"one"
    },
    {
        title:"two"
    },
    {
        title:"three"
    }
 ])

 /* query operators */
db.books.find({name:{$eq: 'one'}})

db.books.updateMany({title:{$exists:true}}, {$rename:{"title":"name"}})

db.books.find({ $or: [ {name:"one"},{name:"two"}]})
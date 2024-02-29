
const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true
},
address: {
  name: { // embedded documents
    street: String,
    ward: Number
  },
},
  contact: Number,
  website: String,
  email: String,
});


const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
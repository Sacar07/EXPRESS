let booksData = [
  {
    _id: ("65d5dbffe74c105b23e3e6c0"),
    name: "python",
    isbn: 251535,
    publishedDate: 2023,
  },
  {
    _id: ("65d5ddb3e74c105b23e3e6c1"),
    name: "javascript",
    isbn: 2222,
  },
  {
    _id: ("65d5df55e74c105b23e3e6c3"),
    name: "ruby and rails",
    isbn: 4444,
    publishedDate: 2023,
  },
  {
    _id: ("65d5e871e74c105b23e3e6c4"),
    name: "java",
    publisher: { name: "name", estd: 2020 },
    authors: [{ name: "Ram" }, { name: "Shyam" }],
  },
  { _id: ("65d5ec15e74c105b23e3e6c5"), name: "one" },
  { _id: ("65d5ec15e74c105b23e3e6c6"), title: "two" },
  { _id: ("65d5ec15e74c105b23e3e6c7"), title: "three" },
];


booksData.forEach(el => {
    console.log(el.name);
})
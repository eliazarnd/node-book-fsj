const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/booksApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Data base mongo Connected", db.connection.name);
  })
  .catch((err) => {
    console.error(err);
  });

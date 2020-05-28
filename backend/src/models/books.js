const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This is a schema for my book

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  category: String,
  cover: String,
  publishDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("books", bookSchema);

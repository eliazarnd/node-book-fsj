const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This is a schema for a book

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imagePath: { type: String, required: true },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("book", bookSchema);

const { Router } = require("express");
const router = Router();

const Book = require("../models/books");

// EndPoint getting all books from database
router.get("/", async (req, res) => {
  const books = await Book.find();

  res.json({
    books,
    statusCode: res.statusCode,
    message: "Book Saved",
  });
});

//Endpoint add a book to database
router.post("/", async (req, res) => {
  console.log(req.body);
  const book = new Book(req.body);

  await book.save();

  res.json({
    statusCode: res.statusCode,
    message: "Success",
  });
});

//EndPoint fetch a specific book by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  console.log(id);
  console.log(book);

  res.json({
    book,
    statusCode: res.statusCode,
    message: "Success",
  });
});

//EndPoint delete a specific book by id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await Book.findByIdAndDelete(id);

  res.json({
    statusCode: res.statusCode,
    message: "Book Removed",
  });
});

//EndPoint delete a specific book by id
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  await Book.findByIdAndUpdate(id, req.body);

  res.json({
    statusCode: res.statusCode,
    message: "Book Updated",
  });
});

module.exports = router;

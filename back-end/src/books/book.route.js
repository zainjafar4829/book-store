const express = require("express");
const router = express.Router();

const {
  CreateBook,
  GetBooks,
  GetSingleBook,
  UpdateBook,
  DeleteBook,
} = require("./books_controller");

// post a book
router.post("/", CreateBook);
// get all books
router.get("/", GetBooks);
// get all books
router.get("/:id", GetSingleBook);
// update a book
router.put("/:id", UpdateBook);
// delete a book
router.delete("/:id", DeleteBook);

module.exports = router;

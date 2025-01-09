const Book = require("./book.model");

const CreateBook = async (req, res) => {
  const book = new Book(...req.body);
  try {
    const newBook = await book.save();
    res.status(200).send({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const GetBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const GetSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).json(book);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      const updatedBook = await book.updateOne({ ...req.body });
      return res.status(200).json(updatedBook);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const DeleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      await book.deleteOne();
      res.status(200).send({ message: "Book Destroyed successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  CreateBook,
  GetBooks,
  GetSingleBook,
  UpdateBook,
  DeleteBook,
};

// controllers/bookController.js
const Book = require('../models/book');

// POST /books – Add a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    if (!title || !author || !publishedYear || !genre) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
    });

    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /books – Get all books (with optional ?genre= & sort)
exports.getAllBooks = async (req, res) => {
  try {
    const { genre } = req.query;

    const filter = {};
    if (genre) {
      filter.genre = genre;
    }

    const books = await Book.find(filter).sort({ publishedYear: 1 });
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /books/:id – Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (error) {
    console.error('Error fetching book by ID:', error);
    // If invalid ObjectId format
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid book ID' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// PUT /books/:id – Update a book by ID
exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publishedYear, genre } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, publishedYear, genre },
      {
        new: true, // return updated document
        runValidators: true,
      }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid book ID' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /books/:id – Delete a book by ID
exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid book ID' });
    }
    res.status(500).json({ message: 'Server error' });
  }
};
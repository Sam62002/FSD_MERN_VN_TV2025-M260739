// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// POST /books – Add a new book
router.post('/', bookController.createBook);

// GET /books – Get all books OR by genre with ?genre=xyz
router.get('/', bookController.getAllBooks);

// GET /books/:id – Get a book by ID
router.get('/:id', bookController.getBookById);

// PUT /books/:id – Update a book by ID
router.put('/:id', bookController.updateBookById);

// DELETE /books/:id – Delete a book by ID
router.delete('/:id', bookController.deleteBookById);

module.exports = router;

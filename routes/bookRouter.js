const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.post('/', booksController.createBook);
router.patch('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
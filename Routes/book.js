const express = require('express');
const { getAllBooks, getBookById } = require('../controllers/book-controller');
const router = express.Router();
//Get all the books
router.get('/',getAllBooks);
// Get a single book by id

module.exports = router;
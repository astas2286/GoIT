const { Book, validateBook } = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const options = {
    page: parseInt(page),
    limit: parseInt(limit)
  };

  try {
    const books = await Book.paginate({}, options);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving books' });
  }
};

// The code below represents pagination without using third-party libraries. 
// But I prefer to use 'mongoose-paginate-v2', as it involves less code and gives a more detailed responseimage.png

// exports.getAllBooks = async (req, res, next) => {
//   const { page = 1, limit = 10 } = req.query;
//   const options = {
//     skip: (parseInt(page) - 1) * parseInt(limit),
//     limit: parseInt(limit)
//   };

//   try {
//     const totalCount = await Book.countDocuments();
//     const books = await Book.find({}, null, options);

//     res.json({
//       totalItems: totalCount,
//       currentPage: parseInt(page),
//       totalPages: Math.ceil(totalCount / parseInt(limit)),
//       books
//     });
//   } catch (error) {
//     next(error);
//   }
// };

exports.getBookById = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving book' });
  }
};

exports.createBook = async (req, res) => {
  const { title, author } = req.body;

  try {
    const { error } = validateBook(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const existingBook = await Book.findOne({ title, author });
    if (existingBook) {
      return res.status(409).json({ error: 'Book already exists' });
    }

    const book = await Book.create({ title, author });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error creating book', details: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  try {
    const { error } = validateBook(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const existingBook = await Book.findOne({ title, author });
    if (existingBook) {
      return res.status(409).json({ error: 'Book with the same title and author already exists' });
    }

    const book = await Book.findByIdAndUpdate(id, { title, author }, { new: true });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating book' });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndRemove(id);
    if (book) {
      res.status(204).json({ error: 'Success' });
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting book' });
  }
};

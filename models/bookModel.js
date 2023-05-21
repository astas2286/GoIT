const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Joi = require('joi');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

bookSchema.plugin(mongoosePaginate);

const Book = mongoose.model('Book', bookSchema);

// Define the Joi validation schema
const bookValidationSchema = Joi.object({
  title: Joi.string().min(1).max(99).required(),
  author: Joi.string().min(1).max(99).required()
});

function validateBook(book) {
  return bookValidationSchema.validate(book);
}

module.exports = {
  Book,
  validateBook
};

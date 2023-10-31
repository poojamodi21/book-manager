const express = require('express');
const router = express.Router();
const Joi = require('joi');
const Book = require('../models/books');
require('dotenv').config();

// Define a Joi schema for request body validation
const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string().required()
});

/**
 * Adds a book
 */

router.post('/', async (req, res) =>{
  try {
    const data = req.body;
    // Validate the request data against the schema
    const {error} = bookSchema.validate(data);
    if (error) {
      // If validation fails, send an error response
      res.status(400).json({error: error.details[0].message});
    } else {
      // If validation passes, proceed with your logic
      const newBook = new Book(data);
      const savedBook = await newBook.save();
      res.json(savedBook);
    }
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
});

/**
 * Gets all books
 */

router.get('/', async (req, res)=>{
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({error: 'Internal server error'});
  }
});


/**
 * Get a book by it's idea
 */
router.get('/:id', async (req, res)=>{
  try {
    const {id}= req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({error: 'Book not found'});
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({error: 'Failed to get book'});
  }
});

/**
 * Update a book by id
 */

router.put('/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const data = req.body;
    // Validate the request data against the schema
    const {error} = bookSchema.validate(data);
    if (error) {
      // If validation fails, send an error response
      return res.status(400).json({error: error.details[0].message});
    } const result = await Book.findByIdAndUpdate(id, data, {new: true});

    if (!result) {
      return res.status(404).json({error: 'Book not found'});
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({error: 'Failed to update book'});
  }
});


/**
 * Delete a book
 */
router.delete('/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.status(500).json({error: 'Book not found'});
    } else {
      res.json(result);
    }
  } catch (error) {
    res.status(500).json({error: 'Failed to delete book '});
  }
});


module.exports = router;

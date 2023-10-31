# Book API Documentation

This is the documentation for the Book API that allows you to perform CRUD operations on books. You can use this API to add, view, update, and delete books. The API includes request body validation using Joi.

## Table of Contents

- [How to Use](#how-to-use)
- [Endpoints](#endpoints)
- Postman documentation link(#postman)

## postman
https://documenter.getpostman.com/view/20349961/2s9YXb8kVW


## how-to-use
- npm i 
- npm run start
- create a db in local environment

## Endpoints

### Get all Books
- Endpoint: GET /api/books
- Description: Retrieve a list of all books in the database.

### Get a Book by ID
- Endpoint: GET /api/books/:id
- Description: Retrieve details of a specific book by its ID.
- Parameters:
  - `id` (string, required): The ID of the book.
Example Response (Success)
```json
{
  "_id": "book_id",
  "title": "Sample Book",
  "author": "John Doe",
  "summary": "This is a sample book summary."
}
```

### Update a Book by ID
- Endpoint: PUT /api/books/:id
- Description: Update the details of a book by its ID.
- Parameters:
- id (string, required): The ID of the book.
- Request Body:
  - `title` (string, required): The title of the book.
  - `author` (string, required): The author of the book.
  - `summary` (string, required): A summary of the book.


### Delete a Book
- Endpoint: DELETE /api/books/:id
- Description: Delete a book by its ID.
- Parameters:
  -id (string, required): The ID of the book.
= Example Response (Success):

### Add a Book
- Endpoint: `POST /api/books`
- Description: Add a new book to the database.
- Request Body:
  - `title` (string, required): The title of the book.
  - `author` (string, required): The author of the book.
  - `summary` (string, required): A summary of the book.
- Example Request:
  ```json
  {
    "title": "Sample Book",
    "author": "John Doe",
    "summary": "This is a sample book summary."
  }
 
 - Example Response:
 ```json
{
  "_id": "book_id",
  "title": "Sample Book",
  "author": "John Doe",
  "summary": "This is a sample book summary."
}

 - Example Response:
 ```json
{
  "error": "Validation error message"
}



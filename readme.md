# Book Management Web Server

This is a web server implementation that allows CRUD operations on a list of books stored in a MongoDB database. It provides the following routes:

## Routes

### Retrieve All Books

- **GET /api/books** - Retrieve all books with pagination support.

  Query Parameters:
  - page: Page number (optional, default: 1)
  - limit: Number of books per page (optional, default: 10)

### Retrieve a Book by ID

- **GET /api/books/:id** - Retrieve a book by its ID.

  Parameters:
  - id: The ID of the book to retrieve.

### Add a New Book

- **POST /api/books** - Add a new book with request body validation.

  Request Body:
  - title: Title of the book (string, required)
  - author: Author of the book (string, required)

### Update a Book

- **PATCH /api/books/:id** - Update a book by its ID. Returns the updated book.

  Parameters:
  - id: The ID of the book to update.

  Request Body:
  - title: Updated title of the book (string, required)
  - author: Updated author of the book (string, required)

### Delete a Book

- **DELETE /api/books/:id** - Delete a book by its ID.

  Parameters:
  - id: The ID of the book to delete.

## Technologies Used

- Node.js
- Express.js
- Mongoose (MongoDB library)
- Joi (Data validation library)
- Cors (Cross-Origin Resource Sharing middleware)

## Installation

1. Clone the repository:

```shell
git clone https://github.com/astas2286/GoIT.git
```

2. Navigate to the project directory:

```shell
cd GoIT
```

3. Install the dependencies:

```shell
npm install
```

4. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Provide the necessary configuration values in the `.env` file, including the MongoDB connection string and other settings.

5. Start the server:

```shell
npm start
```

The server will be running on http://localhost:8000 by default (or the configured `PORT` environment variable).

## Deployment

The server has been deployed and is accessible at: [https://goitafanasievstanislav.onrender.com/api/books/](https://goitafanasievstanislav.onrender.com/api/books/)

The source code is available on GitHub: [https://github.com/astas2286/GoIT](https://github.com/astas2286/GoIT)

To deploy the server to your own environment, you can follow the steps below:

1. Clone the repository:

```shell
git clone https://github.com/astas2286/GoIT.git
```

2. Navigate to the project directory:

```shell
cd GoIT
```

3. Install the dependencies:

```shell
npm install
```

4. Configure environment variables:

   - Create a `.env` file in the root directory.
   - Provide the necessary configuration values in the `.env` file, including the MongoDB connection string and other settings.

5. Start the server:

```shell
npm start
```

Please ensure you have Node.js and MongoDB installed and properly configured before running the server.

## Additional Notes

- The server utilizes pagination for retrieving all books, allowing control over the page number and the number of books per page.
- Request body validation is implemented using the Joi library to ensure the provided data follows the specified format and requirements.
- Cross-Origin Resource Sharing (CORS) is enabled using the Cors middleware, allowing cross-origin requests to the server.
- The server utilizes the Mongoose library to connect to a MongoDB database and perform CRUD operations on the book collection.

Feel free to explore the code in the repository to understand the implementation details. If you have any questions or need further assistance, please don't hesitate to reach out.
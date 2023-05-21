const express = require('express');
const cors = require('cors')

// Routers
const bookRouter = require('./routes/bookRouter');
const CustomError = require('./utils/customError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(cors())
// Middleware
app.use(express.json());

app.get('/api', (req, res, next) => {
    res.status(200).json({
        status: "success",
        data: "Backend message from api"
    })
});

app.use('/api/books', bookRouter);

app.all('*', (req, res, next) => {
    const err = new CustomError(`Can't find ${req.originalUrl} on this server`, 404);
    next(err);
});

//Global error handle
app.use(globalErrorHandler);

module.exports = app;
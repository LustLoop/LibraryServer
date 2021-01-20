const bookService = require('../services/books');

const getBooks = (req, res, next) => {
    bookService.getBooks()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const addBook = (req, res, next) => {
    bookService.addBook(req.body.title, req.body.author, true)
        .then((book) => {
            res.status(201).send(book);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

module.exports = {
    getBooks,
    addBook,
};
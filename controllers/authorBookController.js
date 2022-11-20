const AuthorBook = require('../models/authorsbooks')

//Create and Save a new Author and Book connection
exports.create = (req, res) => {
    //Validate request
    if (!req.body.authorId || !req.body.bookId) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    //Create an Author and Book connection
    const authorBook = {
        authorId: req.body.authorId,
        bookId: req.body.bookId
    }

    //Save Author and Book connection in the database
    AuthorBook.create(authorBook)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the AuthorBook"
            })
        })
}

// Delete an Author and Book connection
exports.delete = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }

    AuthorBook.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(res.status(200).send({
            message: `Author and Book connection with id: ${req.body.id}was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the Author and Book connection"
            })
        })
}

//Update a Author and Book connection
exports.update = (req, res) => {
    AuthorBook.upsert({
        id: req.body.id,
        authorId: req.body.authorId,
        bookId: req.body.bookId
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while updating the Author and Book connection"
            })
        })
}

//Get Метод

//GET Books by author
exports.getBooksByAuthor = (req, res) => {
    if (!req.body.authorId) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    AuthorBook.findAll({
        where: {
            authorId: req.body.authorId
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving Books by author"
            })
        })
}
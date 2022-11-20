const BookCategory = require('../models/bookscategories')

//Create and Save a new Author and Book connection
exports.create = (req, res) => {
    //Validate request
    if (!req.body.bookId || !req.body.categoryId) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    //Create a Book and Category connection
    const bookCategory = {
        bookId: req.body.bookId,
        categoryId: req.body.categoryId
    }

    //Save Book and Category connection in the database
    BookCategory.create(bookCategory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Connection between Book and Category"
            })
        })
}

// Delete an Book and Category connection
exports.delete = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }

    BookCategory.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(res.status(200).send({
            message: `Book and Category connection with id: ${req.body.id} was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the Book and Category connection"
            })
        })
}

//Update a Book and Category connection
exports.update = (req, res) => {
    BookCategory.upsert({
        id: req.body.id,
        bookId: req.body.bookId,
        categoryId: req.body.categoryId
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while updating the Book and Category connection"
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


const Book = require('../models/book')
const Category = require('../models/category')
const Sequelize = require('sequelize');
const Operator = Sequelize.Op;

//Create and Save a new Book
exports.create = (req, res) => {
    //Validate request
    if (!req.body.title || !req.body.isbn || !req.body.pageCount || !req.body.status) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    //create a Book
    const book = {
        title: req.body.title,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        publishedDate: req.body.publishedDate,
        thumbnailUrl: req.body.thumbnailUrl,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        status: req.body.status,
    };

    // Save book
    Book.create(book)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Book'
            });
        });
}

// Get all books
exports.findAll = (req, res) => {
    Book.findAll()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving books'
            })
        })
}

// Delete a Book
exports.delete = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }

    Book.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(res.status(200).send({
            message: `Book with id: ${req.body.id} was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the Book"
            })
        })
}

//Update a Book
exports.update = (req, res) => {
    Book.upsert({
        id: req.body.id,
        title: req.body.name,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        publishedDate: req.body.publishedDate,
        thumbnailUrl: req.body.thumbnailUrl,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        status: req.body.status,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while updating the Book"
            })
        })
}

//GET Books by titles
exports.getBooksByTitle = (req, res) => {
    if (!req.params.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    Book.findAll({
        where: {
            title: { [Operator.like]: `%${req.params.title}%` }
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while retrieving Books by title"
            })
        })
}

//NOT WORKING

// exports.getBooksByCategory = async (req, res) => {
//     if(!req.params.category) {
//         res.status(400).send({
//             message: 'No category id provided!'
//         });
//         return;
//     }
//     const category = await Category.findOne({
//         where: { name: req.params.category },
//         attributes: ['id']
//     });
//     Book.findAll({
//         attributes: [
//             'title', 'isbn', 'pageCount', 'publishedDate', 
//             'longDescription', 'shortDescription', 'status'
//         ],
//         include: [
//             {
//                 model: Category,
//                 where: {
//                     id: category.id
//                 }, 
//                 attributes: ['id', 'name']
//             },
//         ]
//     })
//     .then(data => {
//         res.send(data);
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: err.message || 'Unable to get books!'
//         });
//     });
// }
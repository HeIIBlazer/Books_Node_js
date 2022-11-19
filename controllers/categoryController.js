const Category = require("../models/category")

//Create and Save a new Category
exports.create = (req, res) => {
    //Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    //Create a Category
    const category = {
        name: req.body.name,
    }

    //Save Category in the database
    Category.create(category)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Category"
            })
        })
}

//Retrieve all Categories from the database
exports.findAll = (req, res) => {
    Category.findAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving categories"
            })
        })
}

// Delete a Category
exports.delete = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }

    Category.destroy({
        where: {
            id: req.body.id
        }
    })
        .then(res.status(200).send({
            message: `Category with id: ${req.body.id} was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the Category"
            })
        })
}

//Update a Category
exports.update = (req, res) => {
    Category.upsert({
        id: req.body.id,
        name: req.body.name,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while updating the Category"
            })
        })
}
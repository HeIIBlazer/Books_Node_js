const Author = require('../models/author')

//Create and Save new Author
exports.create = (req,res) => {
    //Validate request
    if (!req.body.full_name) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }  

    //Create an Author
    const author = {
        full_name: req.body.full_name,
    }

    //Save Author in the database
    Author.create(author)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Author"
            })
        })
}

//Retrieve all Authors from the database
exports.findAll = (req,res) => {
    Author.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving authors"
        })
    })
}
// Delete an Author
exports.delete = (req, res) => {
    if (!req.body.id) {
        res.status(400).send({
            message: 'Content can not be empty!'
        })
        return
    }

    Author.destroy({
        where: {
            id: req.body.id,
        }
    })
        .then(res.status(200).send({
            message: `Author with id: ${req.body.id} was deleted successfully`
        }))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the Author"
            })
        })
}

//Update a Author
exports.update = (req, res) => {
    Author.upsert({
        id: req.body.id,
        full_name: req.body.full_name,
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while updating the Author"
            })
        })
}


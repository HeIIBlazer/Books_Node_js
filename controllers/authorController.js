const e = require('express')
const Author = require('../models/author')

//Create - new Author
exports.create = (req,res) => {
    //Validate request
    if (!req.body.fullname) {
        res.status(400).send({
            message: "Full name is not defined"
        })
        return
    }  


    //Create a Author
    const author = {
        fullname: req.body.fullname,
    }

    //Save Author in the database
    Author.create(author)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Category"
            })
        })


}

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

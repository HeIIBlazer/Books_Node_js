// /**
//  *@swagger
//  *components: 
//  *  schemas:
//  *      Author:
//  *          type: object
//  *          required:
//  *              - fullName
//  *          properties:
//  *              id:
//  *                  type: integer
//  *                  description: the auto-generated id of the author.
//  *              name:
//  *                  type: string
//  *                  description: The name of author.
//  *          example:
//  *              name: Joe Walker
//  */

module.exports = app => {
    const author = require("../controllers/authorController")
    const router = require("express").Router()

    // Create a new Author
    router.post("/", author.create)

        // /**
    //  * 
    //  * @swagger
    //  * /api/authors:
    //  *  get:
    //  *      summary: Retrieve a list of authors.
    //  *      description: Retrieve a list of authors.
    //  *      responses:
    //  *          200:
    //  *              description: A list of authors.
    //  *              content:
    //  *                  application/json:
    //  *                      schema:
    //  *                          type: object
    //  *                          properties:
    //  *                              data:
    //  *                                  type: array
    //  *                                  items:
    //  *                                      type: object
    //  *                                      properties:
    //  *                                          id:
    //  *                                              type: integer
    //  *                                              description: The author ID.
    //  *                                              example: 1
    //  *                                          name:
    //  *                                              type: string
    //  *                                              description: The author's name.
    //  *                                              example: Joe Walker
    //  *                                  
    //  */
    router.get("/", author.findAll)

    app.use('/api/author', router)
}
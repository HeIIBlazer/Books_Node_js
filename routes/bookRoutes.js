/**
* @swagger
* components:
*   schemas:
*       Book:
*           type: object
*           required:
*               — title
*               — isbn
*           properties:
*               id:
*                   type: integer
*                   description: The auto-generated id of the book.
*               title:
*                   type: string
*               isbn:
*                   type: bigint
*               pageCount:
*                   type: integer
*               publishedDate:
*                   type: dateTime
*               thumbnailUrl:
*                   type: string
*               longDescription:
*                   type: string
*               shortDescription:
*                   type: string
*               status:
*                   type: enum('PUBLISH', 'NOT PUBLISH')
*           example:
*               id: 123,
*               title: Genius,
*               isbn: 1231231232
*/

module.exports = app => {
    const books = require('../controllers/bookController');
    const router = require('express').Router();

    /**
    * 
    * @swagger
    * /api/books:
    *   get:
    *     summary: Retrieve a list of books.
    *     description: Retrieve a list of books.
    *     responses:
    *       200:
    *         description: A list of books.
    *         content:
    *           application/json:
    *             schema:
    *               type: object
    *               properties:
    *                 data:
    *                   type: array
    *                   items:
    *                     type: object
    *                     properties:
    *                      id:
    *                        type: integer
    *                        description: The book ID.
    *                        example: 1
    *                      title:
    *                        type: string
    *                        description: The book's name.
    *                        example: Unlocking Android
    *                      isbn:
    *                        type: bigint
    *                        description: The book's isbn.
    *                        example: 1933988673
    *                      pageCount:
    *                        type: integer
    *                        description: The book's pageCount
    *                        example: 11
    *                      publishedDate:
    *                        type:  dateTime
    *                        description: The book's publishedDate
    *                      thumbnailUrl:
    *                        type: string
    *                        description: The book's img
    *                        example: https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book
    *                      shortDescription:
    *                        type: string
    *                        description: The book's shortDescription
    *                        example: short description
    *                      longDescription:
    *                        type: string
    *                        description: The book's longDescription
    *                        example: long description
    *                      status:
    *                        type: enum('PUBLISH', 'NOT PUBLISH')
    *                        description: The book's status
    *                        example: PUBLISH                            
    */
    //Retrieve a list of Books
    router.get('/bb', books.findAll);

    /**
    * 
    * @swagger
    * /api/books:
    *   post:
    *     summary: Create and Save new book.
    *     requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               id:
    *                 type: integer
    *               title:
    *                 type: string
    *               isbn:
    *                 type: bigint
    *               pageCount:
    *                 type: integer
    *               publishedDate:
    *                 type:  dateTime
    *               thumbnailUrl:
    *                 type: string
    *               shortDescription:
    *                 type: string
    *               longDescription:
    *                 type: string
    *               status:
    *                 type: enum('PUBLISH', 'NOT PUBLISH')
    *             example:
    *                 title: ""
    *                 isbn:
    *                 pageCount:
    *                 publishedDate:
    *                 thumbnailUrl: ""
    *                 shortDescription: ""
    *                 longDescription: ""
    *                 status: ""
    *     responses:
    *       '200':
    *         description: OK
    *                   
    *                      
    *                                 
    */
    // Create a new Book
    router.post('/', books.create);


    /**
    * 
    * @swagger
    * /api/books:
    *   delete:
    *     summary: Delete book.
    *     requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               id:
    *                 type: integer
    *               title:
    *                 type: string
    *               isbn:
    *                 type: bigint
    *               pageCount:
    *                 type: integer
    *               publishedDate:
    *                 type:  dateTime
    *               thumbnailUrl:
    *                 type: string
    *               shortDescription:
    *                 type: string
    *               longDescription:
    *                 type: string
    *               status:
    *                 type: enum('PUBLISH', 'NOT PUBLISH')
    *             example:
    *                 id: 
    *     responses:
    *       '200':
    *         description: OK                              
    */
    //Delete a Book
    router.delete('/', books.delete);

    /**
    * 
    * @swagger
    * /api/books:
    *   put:
    *     summary: Update a Book.
    *     requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               id:
    *                 type: integer
    *               title:
    *                 type: string
    *               isbn:
    *                 type: bigint
    *               pageCount:
    *                 type: integer
    *               publishedDate:
    *                 type:  dateTime
    *               thumbnailUrl:
    *                 type: string
    *               shortDescription:
    *                 type: string
    *               longDescription:
    *                 type: string
    *               status:
    *                 type: enum('PUBLISH', 'NOT PUBLISH')
    *             example:
    *                 id: 
    *                 title: ""
    *                 isbn:
    *                 pageCount:
    *                 publishedDate:
    *                 thumbnailUrl: ""
    *                 shortDescription: ""
    *                 longDescription: ""
    *                 status: ""
    *     responses:
    *       '200':
    *         description: OK                        
    */
    //Update a Book
    router.put("/", books.update)


    //GET МЕТОДЫ
    /**
    * 
    * @swagger
    * /api/books/:title:
    *   get:
    *     summary: GET Books By title.
    *     params:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties:
    *               id:
    *                 type: integer
    *               title:
    *                 type: string
    *               isbn:
    *                 type: bigint
    *               pageCount:
    *                 type: integer
    *               publishedDate:
    *                 type:  dateTime
    *               thumbnailUrl:
    *                 type: string
    *               shortDescription:
    *                 type: string
    *               longDescription:
    *                 type: string
    *               status:
    *                 type: enum('PUBLISH', 'NOT PUBLISH')
    *             example:
    *                 title: ""
    *     responses:
    *       '200':
    *         description: OK

    */
    //GET Books by titles
    router.get("/byTitle/:title", books.getBooksByTitle)

    //NOT WORKING
    // //Get books by category
    // router.get("/byCategory/:category", books.getBooksByCategory )



    app.use('/api/books', router)
}
/**
*@swagger
*components:
*  schemas:
*      AuthorBook:
*          type: object
*          required:
*             - name
*          properties:
*              id:
*                  type: integer
*                  description: the auto-generated id of the authorBook.
*              authorId:
*                  type: integer
*                  description: the id of the author
*              bookId:
*                  type: integer
*                  description: the id of the book
*          example: 
*              authorId: 1
*              bookId: 1
*/

module.exports = app => {
    const authorBook = require('../controllers/authorBookController')
    const router = require("express").Router()

    // /**
    //  * 
    //  * @swagger
    //  * /api/authorBook:
    //  *   post:
    //  *     summary: Create and Save new Author and Book connection.
    //  *     requestBody:
    //  *       content:
    //  *         application/json:
    //  *           schema:
    //  *             type: object
    //  *             properties: 
    //  *               id:
    //  *                 type: integer
    //  *               authorId:
    //  *                 type:integer
    //  *               bookId:
    //  *                 type:integer
    //  *             example:
    //  *               authorId: 
    //  *               bookId: 
    //  *     responses:
    //  *       '200':
    //  *         description: OK
    //  *                                  
    //  */
    // //Create Author and Book connection
    // router.post("/", authorBook.create)

    /**
     * 
     * @swagger
     * /api/authorBook:
     *   delete:
     *     summary: Delete Author and Book connection.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               authorId:
     *                 type:integer
     *               bookId:
     *                 type:integer
     *             example:
     *               id: 
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */
    //Delete Author and Book connection
    router.delete("/", authorBook.delete)

    /**
     * 
     * @swagger
     * /api/authorBook:
     *   put:
     *     summary: Update Author and Book connection.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               authorId:
     *                 type:integer
     *               bookId:
     *                 type:integer
     *             example:
     *               id: 
     *               authorId: 
     *               bookId: 
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */

    //Update Author and Book connection
    router.put("/", authorBook.update)

    app.use('/api/authorBook', router)
}
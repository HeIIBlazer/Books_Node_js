/**
*@swagger
*components:
*  schemas:
*      BookCategory:
*          type: object
*          properties:
*              id:
*                  type: integer
*                  description: the auto-generated id of the bookCategory.
*              bookId:
*                  type: integer
*                  description: the id of the book
*              categoryId:
*                  type: integer
*                  description: the id of the category
*          example: 
*              bookId: 1
*              categoryId: 1
*/

module.exports = app => {
    const bookCategory = require('../controllers/bookCategoryController')
    const router = require("express").Router()

    /**
     * 
     * @swagger
     * /api/bookCategory:
     *   post:
     *     summary: Create and Save new Book and Category connection.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               bookId:
     *                 type:integer
     *               categoryId:
     *                 type:integer
     *             example:
     *               bookId: 
     *               categoryId: 
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */
    //Create Book and Category connection
    router.post("/", bookCategory.create)

    /**
     * 
     * @swagger
     * /api/bookCategory:
     *   delete:
     *     summary: Delete Book and Category connection.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               bookId:
     *                 type:integer
     *               categoryId:
     *                 type:integer
     *             example:
     *               id: 
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */
    //Delete Book and Category connection
    router.delete("/", bookCategory.delete)

    /**
     * 
     * @swagger
     * /api/bookCategory:
     *   put:
     *     summary: Update Book and Category connection.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               bookId:
     *                 type:integer
     *               categoryId:
     *                 type:integer
     *             example:
     *               id: 
     *               bookId: 
     *               categoryId: 
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */

    //Update Book and Category connection
    router.put("/", bookCategory.update)

    app.use('/api/bookCategory', router)
}
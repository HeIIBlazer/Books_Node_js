/**
*@swagger
*components:
*  schemas:
*      Category:
*          type: object
*          required:
*             - name
*          properties:
*              id:
*                  type: integer
*                  description: the auto-generated id of the category.
*              name:
*                  type: string
*                  description: The name of category
*          example: 
*              name: RESTful API
*/

module.exports = app => {
    const categories = require('../controllers/categoryController')
    const router = require("express").Router()

    /**
     * 
     * @swagger
     * /api/categories:
     *   post:
     *     summary: Create and Save new category.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               name:
     *                 type:string
     *             example:
     *               name: microsoft.NET
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */
    //Create a new category
    router.post("/", categories.create)

    /**
     * 
     * @swagger
     * /api/categories:
     *   get:
     *     summary: Retrieve a list of categories.
     *     description: Retrieve a list of categories.
     *     responses:
     *       200:
     *         description: A list of categories.
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
     *                        description: The category ID.
     *                        example: 1
     *                      name:
     *                        type: string
     *                        description: The category's name.
     *                        example: RESTful API
     *                                  
     */
    // Retrieve all Categories from the database
    router.get("/", categories.findAll)

    /**
     * 
     * @swagger
     * /api/categories:
     *   delete:
     *     summary: Delete category.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               name:
     *                 type:string
     *             example:
     *               id: 1
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */
    //Delete Category
    router.delete("/", categories.delete)

    /**
     * 
     * @swagger
     * /api/categories:
     *   put:
     *     summary: Update category's data.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               name:
     *                 type:string
     *             example:
     *               id: 1   
     *               name: ""
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */

    //Update Category
    router.put("/", categories.update)

    app.use('/api/categories', router)
}
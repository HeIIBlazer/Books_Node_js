 /**
*@swagger
*components: 
*  schemas:
*      Author:
*          type: object
*          required:
*              - name
*          properties:
*              id:
*                  type: integer
*                  description: the auto-generated id of the author.
*              full_name:
*                  type: string
*                  description: The name of author.
*          example:
*              name: Joe Walker
*/

module.exports = app => {
    const authors = require("../controllers/authorController")
    const router = require("express").Router()

    /**
     * 
     * @swagger
     * /api/authors:
     *   post:
     *     summary: Create and Save new author.
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties: 
     *               id:
     *                 type: integer
     *               full_name:
     *                 type:string
     *             example:
     *               full_name: ""
     *     responses:
     *       '200':
     *         description: OK
     *                                  
     */
    //Create a new author
    router.post("/", authors.create)

    /**
    * 
    * @swagger
    * /api/authors:
    *   get:
    *     summary: Retrieve a list of authors.
    *     description: Retrieve a list of authors.
    *     responses:
    *       200:
    *         description: A list of authors.
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
    *                        description: The author ID.
    *                        example: 1
    *                      full_name:
    *                        type: string
    *                        description: The author's name.
    *                        example: Joe Walker
    */
    // Retrieve a list of authors
    router.get("/", authors.findAll)

    /**
    * 
    * @swagger
    * /api/authors:
    *   delete:
    *     summary: Delete author.
    *     requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties: 
    *               id:
    *                 type: integer
    *               full_name:
    *                 type:string
    *             example:
    *               id: 
    *     responses:
    *       '200':
    *         description: OK
    *                                  
    */
    //Delete an author
    router.delete("/", authors.delete)

    /**
    * 
    * @swagger
    * /api/authors:
    *   put:
    *     summary: Update author's data.
    *     requestBody:
    *       content:
    *         application/json:
    *           schema:
    *             type: object
    *             properties: 
    *               id:
    *                 type: integer
    *               full_name:
    *                 type:string
    *             example:
    *               id:
    *               full_name: "" 
    *     responses:
    *       '200':
    *         description: OK
    *                                  
    */
    //Update an author
    router.put("/", authors.update)

    app.use('/api/authors', router)
}
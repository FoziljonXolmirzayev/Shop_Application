/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operations related to Products
 */

/**
 * @swagger
 * /products/get:
 *   get:
 *     summary: Get Products info
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  example: name of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/create:
 *   post:
 *     summary: Creating product
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  example: name of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/update/:id:
 *   put:
 *     summary: Updating product
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  example: name of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

/**
 * @swagger
 * /products/delete/:id:
 *   delete:
 *     summary: Deleting product
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                  type: string
 *                  example: name of product
 *                 description:
 *                  type: string
 *                  example: description of product
 *                 price:
 *                  type: number
 *                  example: price of product
 *                 quantity:
 *                  type: number
 *                  example: quantity of product
 *                 discount:
 *                  type: number
 *                  example: discount of product
 *                 createdAt:
 *                  type: date
 *                  example: created time of product
 */

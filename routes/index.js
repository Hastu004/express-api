'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const api = express.Router()
const ProductCtrl = require('../controllers/product')

// muuestra los productos
/**
 * @swagger
 * components:
 *  schemas:
 *      Product:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              picture:
 *                  type: string
 *              price:
 *                  type: string
 *              category:
 *                  type: string
 *              description:
 *                  type: string
 *          required:
 *              -name
 *              -price
 *              -category
 *          example:
 *              name: PC1
 *              price: 100
 *              category: computers
 *      
 *      User:
 *          type: object   
 *          properties:
 *              email:
 *                  type: string     
 *              displayName:
 *                  type: string
 *              avatar:
 *                  type: string
 *              example:
 *                  email: user1@gmail.com
 *                  displayName: user1
 *                  avatar: none
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: get all products
 *      tags: [Product]
 *      responses:
 *          200:
 *              description: all products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 */
api.get('/products', ProductCtrl.getProducts)
// retorna un producto de la base de datos
/**
 * @swagger
 * /api/product/{productId}:
 *  get:
 *      summary: return a product
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema:
 *              type: string
 *          required: true
 *          description: the product id
 *      responses:
 *          200:
 *              description: return a product
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: product not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/Product'
 */
api.get('/product/:productId', ProductCtrl.getProduct)
// agrega un producto a la base de datos
/**
 * @swagger
 * /api/product:
 *  post:
 *      summary: create new product
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description: new product created
 * 
 */
api.post('/product', ProductCtrl.saveProduct)
// actualiza un producto
/**
 *@swagger
 * /api/product/{productId}:
 *  put:
 *      summary: update a user
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema: 
 *              type: string
 *          required: true
 *          description: updated the product with id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 *      responses:
 *          200:
 *              description: product deleted
 *          400:
 *              description: product not found  
 */
api.put('/product/:productId', ProductCtrl.updateProduct)
// elimina un producto de la base de datos
/**
 * @swagger
 * /api/product/{productId}:
 *  delete:
 *      summary: delete a user
 *      tags: [Product]
 *      parameters:
 *        - in: path
 *          name: productId
 *          schema: 
 *              type: string
 *          required: true
 *          description: delete the product with id
 *      responses:
 *          200:
 *              description: product deleted
 *          400:
 *              description: product not found      
 */
api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api
'use strict'

const Product = require('../models/products')
const mongoose = require('mongoose')

function getProduct(req, res) {
	let productId = req.params.productId
	Product.findById(productId, (err, product) => {
		if (err) return res.starus(500).send({ message: 'Error al encontrar el producto' })
		if (!product) return res.status(404).send({ mesage: 'El producto no existe' })
		res.status(200).send({ product: product })
	})

}

function getProducts(req, res) {
	console.log({ req })
	Product.find({}, (err, products) => {
		if (err) return res.status(500).send({ message: 'Error al realizar la petición' })
		if (!products) return res.status(404).send({ message: 'No existen productos' })
		res.send(200, { products })
	})
}
function saveProduct(req, res) {
	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description
	product.save((err, productStored) => {
		if (err) res.status(500).send({ message: `Error al guardar en la base de datos: ${err}` })
		res.status(200).send({ product: productStored })
	})
}

function updateProduct(req, res) {
	let productId = req.params.productId
	let update = req.body

	Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
		if (err) res.status(500).send({ message: 'Error al actualizar el producto' })

		res.status(200).send({ product: productUpdated })
	})

}

function deleteProduct(req, res) {
	let productId = req.params.productId
	Product.findById(productId, (err, product) => {
		if (err) res.status(500).send({ message: 'Error al borrar el producto' })
		product.remove(err => {
			if (err) res.status(500).send({ message: 'error al borrar el producto' })
			res.status(200).send({ message: ' el producto se ha eliminado' })
		})
	})
}


module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}
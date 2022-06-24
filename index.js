'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

// mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true} , (err, res) => {
	if (err) throw err
	console.log('Conectado a la base de datos')

	app.listen(config.port, () => {
		console.log(`api rest en localhost puerto: ${config.port}`)
	})
})





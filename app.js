'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes/index')
const cors = require("cors");

const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const path = require("path")

const config = require('./config')

const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MongoDB API",
            version: "1.0.0"
        },
        servers: [
            {
                url: `https://express-api-production-0d8b.up.railway.app:${config.port}`,
                description: 'Development server (under construction)',
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}
app.use(cors({ origin: `https://express-api-production-0d8b.up.railway.app:${config.port}`, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

module.exports = app
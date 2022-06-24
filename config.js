require('dotenv').config({ path: __dirname + '/.env' })
const DB_CLOUD = process.env['DB_CLOUD'];
module.exports = {
	port: process.env.PORT || 3000,
	db: DB_CLOUD
}
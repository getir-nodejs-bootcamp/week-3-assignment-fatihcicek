const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	port: process.env.PORT,
	env: process.env.NODE_ENV,
	mongodbUrl: process.env.MONGODB_URL,
	secret_key: process.env.secret_key
};
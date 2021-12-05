const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
const {users} = require('../database');

const register = async (req, res) => {
	try {
		// Get user input
		const data = req.body;

		// check if user already exist
		// Validate if user exist in our database
		const oldUser = users.find(user => user.username === req.body.username);

		if (oldUser) {
			return res.status(409).send('User Already Exist. Please Login');
		}

		const user = users.push(data);

		// Create token
		const token = jwt.sign(
			{user_id: user.id, user},
			config.secret_key,
			{
				expiresIn: '2h',
			}
		);

		res.status(201).send({user: user, token: token});
	} catch (err) {
		if (err.code === 11000) {
			return res.status(400).send({error: 'User already exists'});
		}

		console.log('an error occurred while creating user', err);
		res.status(500).send({error: 'Error creating user'});
	}
};

const loginUser = async (req, res) => {
	try {
		// Get user input

		const user = users.find(user => user.username === req.body.username);

		if (user) {

			// Create token
			const token = jwt.sign(
				{user_id: user.id, user},
				config.secret_key,
				{
					expiresIn: '2h',
				}
			);

			res.status(201).send({user, token: token});
		} else {
			res.status(400).send('Username or password is incorrect');
		}
	} catch (err) {
		console.log(err);
		res.status(500).send('Error logging in');
	}
};

module.exports = {register, loginUser};

const {companies} = require('../database');
const jwt = require('jsonwebtoken');
const config = require('../config/index');

const createCompany = async (req, res) => {
	try {

		const data = req.body;

		const oldCompany = companies.find(company => company.email === req.body.email);

		if (oldCompany) {
			return res.send('Company Already Exist. Please try different');
		}

		const company = companies.push(data);

		res.status(201).send({company: company});
	} catch (err) {
		console.log('an error occurred while creating company', err);
		res.status(500).send(err);
	}
};

const getCompany = async (req, res) => {

	try {
		const companies01 = companies.find((i) => i.id === parseInt(req.params.id));
		if (!companies01) {
			return res.status(404).send({message: 'Company not found'});
		}
		res.send(companies01);
	} catch (err) {
		console.log('an error occurred while getting company', err);
		res.status(500).send(err);
	}
};

const getAllCompanies = async (req, res) => {

	try {

		res.send(companies);
	} catch (err) {
		console.log('an error occurred while getting all posts', err);
		res.status(500).send(err);
	}
};

const updateCompanies = async (req, res) => {

	try {

		const data = req.body;

		const companies01 = companies.find((i) => i.id === parseInt(req.params.id));

		companies01.name = data.name;
		companies01.email = data.email;
		companies01.url = data.url;

		res.status(200).send({message: `Company is updated successfully`});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error,
		});
	}
};

const patchCompanies = async (req, res) => {

	try {

		const data = req.body;

		const companies01 = companies.find((i) => i.id === parseInt(req.params.id));

		companies01.name = data.name;

		res.status(200).send({message: `Company name is updated successfully`});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error,
		});
	}
};

const deleteCompany = async (req, res) => {

	try {
		const companies01 = companies.findIndex((i) => i.id === parseInt(req.params.id));

		companies.splice(companies01, 1);

		res.status(200).send({message: `Company is deleted successfully`});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error,
		});
	}
};

module.exports = {
	createCompany,
	getCompany,
	getAllCompanies,
	updateCompanies,
	patchCompanies,
	deleteCompany
};
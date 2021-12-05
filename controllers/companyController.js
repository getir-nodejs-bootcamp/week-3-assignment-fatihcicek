const {companies, users} = require('../database');

const createCompany = async (req, res) => {
	const {data} = req.body;

	const oldCompany = companies.find(company => company.email === req.body.email);

	if (oldCompany) {
		return res.status(409).send('Company Already Exist');
	}

	try {
		const result = companies.push(data);
		res.status(201).send(result);
	} catch (err) {
		console.log('an error occurred while creating company', err);
		res.status(500).send(err);
	}
};

const getCompany = async (req, res) => {
	const id = req.params;
	try {
		console.log(id);
		const companies = users.find(company => company.id === id);
		if (!companies) {
			return res.status(404).send({message: 'Company not found'});
		}
		res.send(companies);
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

/*const updatePost = async (req, res) => {
	const {id: postID} = req.params;
	try {

		console.log(postID);
		const post = await Post.findById(postID);
		post.title = req.body.title;
		post.description = req.body.description;

		post.save();

		res.status(200).send({message: `Post is updated successfully`});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			error,
		});
	}
};*/

module.exports = {
	createCompany,
	getCompany,
	getAllCompanies,
	//updatePost
};
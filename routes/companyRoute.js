const express = require('express');

const {
//	createPost,
	createCompany,
	getAllCompanies,
//	updatePost
} = require('../controllers/companyController');
const router = express.Router();

//router.post('/', createPost);
//router.get('/', getCompany);
router.get('/', getAllCompanies);
router.post('/', createCompany);
// router.get('/', (req, res) => {
// 	res.send('başarılı');
// });
//router.get('/', getAllPosts);
//router.put('/:_id', updatePost);

module.exports = router;
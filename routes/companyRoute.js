const express = require('express');

const {
	createCompany,
	getCompany,
	getAllCompanies,
	updateCompanies,
	patchCompanies,
	deleteCompany
} = require('../controllers/companyController');
const router = express.Router();

router.get('/:id', getCompany);
router.get('/', getAllCompanies);
router.post('/', createCompany);
router.put('/:id', updateCompanies);
router.patch('/:id', patchCompanies);
router.delete('/:id', deleteCompany);

module.exports = router;
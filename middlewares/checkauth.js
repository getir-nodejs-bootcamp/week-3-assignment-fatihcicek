const jwt = require('jsonwebtoken');
const config = require('../config/index');

const checkauth = (req, res, next) => {
	try {
		/*JWT is send with request header!
		Format of it: Authorization : Bearer <token>
		*/
		const token = req.headers.authorization.split(' ')[1];
		req.userData = jwt.verify(token, `${config.secret_key}`);
		next();
	} catch (error) {
		return res.status(401).send({
			message: 'Auth failed'
		});
	}
};


module.exports = {checkauth};

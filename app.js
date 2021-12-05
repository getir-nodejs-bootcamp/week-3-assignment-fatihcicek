const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/index');
const userRouter = require('./routes/userRoute');
const companyRouter = require('./routes/companyRoute');
const {checkauth} = require('./middlewares/checkauth');

const app = express();

app.use(express.json());
app.use('/', userRouter);
app.use('/companies', companyRouter);

let server;
mongoose
	.connect('mongodb+srv://fatih:xDba3jRTr3a2CJ2@cluster0.izaab.mongodb.net/test')
	.then(() => {
		console.log('Connected to MongoDB');
		server = app.listen(config.port, () => {
			console.log(`Listening to port ${config.port}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});


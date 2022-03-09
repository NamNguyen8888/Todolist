import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import TodoRouter from './routers/Todo.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(express.json());
app.use('/api/todo', TodoRouter)

mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log('Db connection successful !!! '))
	.catch(err => {
		console.log(err);
	});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`backend server is running! ${PORT}`);
});

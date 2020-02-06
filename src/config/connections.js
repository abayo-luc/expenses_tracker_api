import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const URL = process.env.MONGODB_URI || 'mongodb://localhost/NODE_APP';

mongoose.connect(URL, {
	useNewUrlParser: true,
	useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', () => {
	console.error.bind('Error in db connection');
});

db.on('open', () => {
	console.log('DB Connection established');
});

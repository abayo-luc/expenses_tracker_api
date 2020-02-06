import mongoose from 'mongoose';
const schema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true
		},
		amount: {
			type: Number,
			required: true
		},
		date: {
			type: Date,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Transactions', schema);

import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
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
		},
		category: { type: mongoose.Types.ObjectId, ref: 'Categories' }
	},
	{
		timestamps: true
	}
);
export default mongoose.model('Transactions', schema);

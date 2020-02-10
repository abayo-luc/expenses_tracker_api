import transactions from '../modals/transactions';
import isValidDate from '../utils/isValidDate';
import moment from 'moment';
class TransactionsController {
	static async index(_req, res) {
		try {
			const data = await transactions
				.find({
					createdAt: {
						$gte: moment()
							.startOf('month')
							.format(),
						$lte: moment()
							.endOf('month')
							.format()
					}
				})
				.sort({ createdAt: 'desc' });
			return res.status(200).json({ transactions: data });
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
	static async create(req, res) {
		try {
			const { title, amount, date: dateTime } = req.body;
			const { date } = isValidDate(dateTime);
			const transaction = await transactions.create({
				title,
				amount,
				date: date
			});
			return res.status(201).json({ transaction });
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
	static async destroy(req, res) {
		try {
			const { id } = req.params;
			const { n } = await transactions.deleteOne({ _id: id });
			if (!n) {
				return res.status(404).json({ message: 'Transactions not found' });
			}
			return res.status(200).json({
				message: 'Transactions deleted'
			});
		} catch (error) {
			return res.status(400).json({ error: error.message });
		}
	}
}

export default TransactionsController;

import categories from '../modals/categories';

export default class Category {
	static async index(_req, res) {
		try {
			const data = await categories.find();
			return res.status(200).json({ categories: data });
		} catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}
	static async create(req, res) {
		try {
			const { name, description } = req.body;
			const category = await categories.create({
				name: name.toLowerCase(),
				description
			});
			return res.status(201).json({ category });
		} catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}

	static async destroy(req, res) {
		try {
			const { id } = req.params;
			const { n } = await categories.deleteOne({ _id: id });
			if (!n) {
				return res.status(404).json({ message: 'Category not found' });
			}
			return res.status(200).json({
				message: 'Category deleted'
			});
		} catch (error) {
			return res.status(400).json({ message: error.message });
		}
	}
}

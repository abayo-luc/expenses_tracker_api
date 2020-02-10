import { Router } from 'express';
import categoryController from '../controllers/categories.controller';
const categoryRouters = Router();

categoryRouters.get('/categories', categoryController.index);
categoryRouters.post('/categories', categoryController.create);
categoryRouters.delete('/categories/:id', categoryController.destroy);

export default categoryRouters;

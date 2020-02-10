import { Router } from 'express';
import TransController from '../controllers/transactions.controller';
const transRouters = Router();
transRouters.get('/transactions', TransController.index);
transRouters.post('/categories/:id/transactions', TransController.create);
transRouters.delete('/transactions/:id', TransController.destroy);
export default transRouters;

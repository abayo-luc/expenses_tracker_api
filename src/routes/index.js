import { Router } from 'express';
import transRouters from './transactions.router';
import categoryRouters from './categories.router';
const routers = Router();

routers.use(transRouters, categoryRouters);
export default routers;

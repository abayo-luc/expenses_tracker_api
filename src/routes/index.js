import { Router } from 'express';
import transRouters from './transactions.router';
const routers = Router();

routers.use(transRouters);
export default routers;

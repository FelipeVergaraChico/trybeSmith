import { Router } from 'express';
import orderController from '../controller/orderController';

const routerO = Router();

routerO.get('/', orderController.listAll);

export default routerO;
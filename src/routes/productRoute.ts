import { Router } from 'express';
import productController from '../controller/productController';

const routerP = Router();

routerP.post('/', productController.registerProducts);
routerP.get('/', productController.listAll);

export default routerP;
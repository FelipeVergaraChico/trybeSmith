import { Router } from 'express';
import loginController from '../controller/loginController';
import ValidateLoginUser from '../middleware/ValidateLoginUser';

const routerL = Router();

routerL.post('/', ValidateLoginUser.validateLoginUser, loginController.login);

export default routerL;
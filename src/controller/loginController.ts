import { Request, Response } from 'express';
import loginService from '../service/loginService';
import htppStatus from '../utils/htppStatus';

const login = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await loginService.login(req.body);
  res.status(htppStatus.htppMapStatus(status)).json(data);
};
export default {
  login,
};
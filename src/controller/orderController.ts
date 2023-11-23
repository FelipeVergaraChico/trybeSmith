import { Request, Response } from 'express';
import orderService from '../service/orderService';
import htppStatus from '../utils/htppStatus';

const listAll = async (req: Request, res: Response): Promise<void> => {
  const { status, data } = await orderService.listAll();
  res.status(htppStatus.htppMapStatus(status)).json(data);
};

export default {
  listAll,
};
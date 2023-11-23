import { Request, Response } from 'express';
import productService from '../service/productService';
import htppStatus from '../utils/htppStatus';

const registerProducts = async (req: Request, res: Response): Promise<void> => {
  const { data, status } = await productService.registerProducts(req.body);
  res.status(htppStatus.htppMapStatus(status)).json(data);
};

const listAll = async (req: Request, res: Response): Promise<void> => {
  const { data, status } = await productService.listall();
  res.status(htppStatus.htppMapStatus(status)).json(data);
};

export default {
  registerProducts,
  listAll,
};
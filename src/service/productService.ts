import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product, ProductInputTypes } from '../types/Product';
import { ResponseServiceType } from '../types/ResponseService';

const registerProducts = async (product: ProductInputtableTypes) 
: Promise<ResponseServiceType<ProductInputTypes>> => {
  const newP = await ProductModel.create(product);
  if (!newP) {
    return { status: 'SERVER_ERROR', data: { message: 'Server Error' } };
  }

  const { id, name, price } = newP.dataValues;
  return { status: 'CREATED', data: { id, name, price } };
};

const listall = async (): Promise<ResponseServiceType<Product[]>> => {
  const products = await ProductModel.findAll();
  if (!products) {
    return { status: 'SERVER_ERROR', data: { message: 'Server Error' } };
  }
  const data = products.map((e) => e.dataValues);
  return { status: 'OK', data };
};

export default {
  registerProducts,
  listall,
};
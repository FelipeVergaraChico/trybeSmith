import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { ResponseServiceType } from '../types/ResponseService';
import { Order } from '../types/Order';

const getProductsIDByOrder = async (id: number): Promise<number[]> => {
  const p = await ProductModel.findAll({ where: { orderId: id } });
  const pm = p.map((po) => po.dataValues.id);
  return pm;
};

const listAll = async (): Promise<ResponseServiceType<Order[]>> => {
  const all = await OrderModel.findAll();
  const p = await Promise.all(all.map(async (o) => {
    const allProducts = await getProductsIDByOrder(o.dataValues.id);
    return {
      id: o.dataValues.id,
      userId: o.dataValues.userId,
      productIds: allProducts,
    };
  }));
  return { status: 'OK', data: p };
};

export default {
  listAll,
  getProductsIDByOrder,
};
export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type ProductInputTypes = Omit<Product, 'orderId'>;

import express from 'express';
import routerP from './routes/productRoute';
import routerO from './routes/orderRoute';
import routerL from './routes/loginRoute';

const app = express();

app.use(express.json());
app.use('/products', routerP);
app.use('/orders', routerO);
app.use('/login', routerL);

export default app;

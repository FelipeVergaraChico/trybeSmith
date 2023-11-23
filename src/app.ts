import express from 'express';
import routerP from './routes/productRoute';

const app = express();

app.use(express.json());
app.use('/products', routerP);

export default app;

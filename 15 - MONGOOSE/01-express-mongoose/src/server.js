import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import './db/db.js';
import productsRouter from './routes/products.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);

app.use('/products', productsRouter)

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});
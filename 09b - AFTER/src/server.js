import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler.js';
import {__dirname} from './path.js';
import productsRouter from './routes/products.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(errorHandler);

app.use('/products', productsRouter);

app.listen(8080, ()=>{
    console.log('🚀 Server listening on port 8080');
});
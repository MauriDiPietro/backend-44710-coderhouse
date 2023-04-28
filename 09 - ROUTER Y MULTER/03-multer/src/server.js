import express from 'express';
import morgan from 'morgan';
import productsRouter from './routes/products.router.js';
import usersRouter from './routes/users.router.js';
import { __dirname } from './path.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/images'));

app.use('/products', productsRouter);
app.use('/users', usersRouter);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto: ${PORT}`);
});
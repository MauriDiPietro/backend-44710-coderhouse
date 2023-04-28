import express from 'express';
import productsRouter from './routes/products.router.js';
import usersRouter from './routes/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/products', productsRouter);
app.use('/users', usersRouter);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto: ${PORT}`);
});
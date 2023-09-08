import express from 'express';
import { dbConnection } from './config/db.connection';
import config from './config/config';
import { errorHandler } from './middlewares/error.handler';
import productRouter from './routes/product.routes'

const app = express();

app.use(express.json());

const PORT = config.PORT;

dbConnection().then(() => console.log('Conectado a la base de datos de Mongo'));

app.use('/api/products', productRouter);

app.use(errorHandler);

app.listen(PORT, ()=>{ 
    console.log(`Server listening on port ${PORT}`);
})
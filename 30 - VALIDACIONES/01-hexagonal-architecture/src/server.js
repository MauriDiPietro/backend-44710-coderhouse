import express from 'express';
import { errorHandler } from './lib/errorHandler.js';
import morgan from 'morgan';
import { initMongoDB } from './lib/dbConnection.js';
import apiRouter from './web/routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
app.use(morgan('dev'));

app.use('/api', apiRouter);

await initMongoDB();

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});
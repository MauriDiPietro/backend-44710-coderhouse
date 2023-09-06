import './db/database.js';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler.js';
import apiRouter from './routes/index.js';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(errorHandler);
app.use(morgan('dev'));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));

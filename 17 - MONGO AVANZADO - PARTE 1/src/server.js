import './db/database.js';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(errorHandler);
app.use(morgan('dev'));

app.use('/users', usersRouter);
app.use('/pets', petsRouter);

const PORT = 8080;

app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));

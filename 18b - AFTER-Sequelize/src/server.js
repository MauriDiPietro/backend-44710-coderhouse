import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import db from './db/db.js';
import postsRoutes from './routes/posts.routes.js';

const app = express();

db.sync({ force: false })
    .then(()=>{
        console.log('conectado a la db');
    })
    .catch((err)=>{
        console.log(err);
    })

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);

app.use('/posts', postsRoutes);

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});
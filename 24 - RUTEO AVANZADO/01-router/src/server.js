import express from 'express';
import routerApi from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', routerApi);

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto: ${PORT}`);
});
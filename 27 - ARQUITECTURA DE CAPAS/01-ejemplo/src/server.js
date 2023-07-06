import express from 'express';
import apiRoutes from './routes/product.routes.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRoutes)

app.listen(8080, ()=>{
console.log('🚀 Server listening on port 8080');
});
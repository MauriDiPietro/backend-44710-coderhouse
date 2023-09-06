import express from 'express';
import { products } from './db.js';
// import arrayProducts from './db.js'

const app = express();

app.get('/', (req, res) => {
    res.send('Hola desde express!')
    // res.redirect('/products')
});

app.get('/products', (req, res)=>{
    res.status(201).json(products);
    // res.render()
});

app.get('/error', (req, res) => {
    res.status(404).send('Error!')
});

app.get('/filterproducts', (req, res) => {
    console.log(req.query)
    const { value } = req.query;
    const productsFilter = products.filter(p => p.price > parseInt(value));
    res.status(200).json(productsFilter);
})

//! PRECIO MAYOR A : ___value___ |BUSCAR|
//! GET ---> `http://localhost:8080/productsfilter?value=${value}`

app.get('/products/:idProd', (req, res) => {
   const { idProd } = req.params;
//    const idProd = req.params.idProd
   console.log(idProd);
   const product = products.find(p => p.id === Number(idProd));
   if(product){
    res.status(200).json(product);
   } else{
    res.status(404).json({message: 'Product not found'});
   }
});


// app.listen(0, function(){
    //     console.log(`server ok en puerto ${this.address().port}`);
    // })
    
const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`server ok en puerto ${PORT}`);
})
import express from 'express';
import ProductManager from './manager/product.manager.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const productManager = new ProductManager('./products.json');

app.get('/products', async(req, res) => {
    try {
        const products = await productManager.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
});

app.get('/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const product = await productManager.getProductById(Number(id));
        if(product){
            res.status(200).json({ message: 'Product found', product })
            // res.status(200).json(product)
        } else {
            res.status(400).send('product not found')
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

/* ------------------------------ con req.query ----------------------------- */
app.get('/products', async(req, res) => {
    try {
        const { id } = req.query;
        const product = await productManager.getProductById(Number(id));
        if(product){
            res.status(200).json({ message: 'Product found', product })
            // res.status(200).json(product)
        } else {
            res.status(400).send('product not found')
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
/* ----------------------------------- -- ----------------------------------- */

app.post('/products', async (req, res)=>{
    try {
        console.log(req.body);
        const product = req.body;
        const newProduct = await productManager.createProduct(product);
        res.json(newProduct);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

app.put('/products/:id', async(req, res) => {
    try {
        // const { name, price, stock } = req.body;
        // const product = {
        //     name,
        //     price,
        //     stock
        // }
        const product = req.body;
        const { id } = req.params;
        const productFile = await productManager.getProductById(Number(id));
        if(productFile){
            await productManager.updateProduct(product, Number(id));
            res.send(`product updated successfully!`);
        } else {
            res.status(404).send('product not found')
        }
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
});

app.delete('/products/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const products = await productManager.getAllProducts();
        if(products.length > 0){
            await productManager.deleteProductById(Number(id));
            res.send(`product id: ${id} deleted successfully`);
        } else {
            res.send(`product id: ${id} not found`);
        }
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
});

app.delete('/products', async(req, res)=>{
    try {
        await productManager.deleteAllProducts();
        res.send('products deleted successfully')
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
})

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`Server ok en puerto: ${PORT}`);
});
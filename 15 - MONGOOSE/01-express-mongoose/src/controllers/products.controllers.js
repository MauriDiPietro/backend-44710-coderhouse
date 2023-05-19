import ProductsManager from "../managers/products.manager.js";
const prodManager = new ProductsManager();

export const getAllController = async (req, res, next) => {
    try {
        const docs = await prodManager.getAllProducts();
        res.json(docs);
    } catch (error) {
        next(error);
    }
}

export const getProductByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const doc = await prodManager.getProductById(id)
        if (!doc) throw new Error('Product not found!')
        res.json(doc)
    } catch (error) {
        next(error);
    }
}

export const createProductController = async (req, res, next) => {
    try {
        const { name, description, price, stock } = req.body
        const newProduct = await prodManager.createProduct({
            name,
            description,
            price,
            stock
        })
        if(!newProduct) throw new Error('Validation Error')
        res.json(newProduct)
    } catch (error) {
        next(error);
    }
}

export const updateProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock } = req.body
        let doc = await prodManager.getProductById(id);
        if (!doc) throw new Error('Product not found!');

        const prodUpdated = await prodManager.updateProduct(
            id,
            { name, description, price, stock }
        )
        res.json(prodUpdated);
    } catch (error) {
        next(error);
    }
}

export const deleteProductController = async (req, res, next) => {
    try {
        const { id } = req.params;
        await prodManager.deleteProduct(id)
        res.send('product deleted!')
        
    } catch (error) {
        next(error);
    }
}

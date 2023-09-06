export const productValidator = (req, res, next) => {
    const product = req.body;
    // console.log(typeof product.price === 'number');
    if (product.price === "" || product.price === undefined || typeof product.price !== 'number'){
        res.status(404).send('no insert price!')
    } else {
        next()
    }
}
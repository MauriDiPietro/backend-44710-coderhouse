//!request ---> middleware //--> endpoint

export const productValidator = (req, res, next) => {
    const product = req.body;
    if (product.price !== undefined) {
        next()
    } else {
        res.status(404).send('This price is undefined')
    }
}
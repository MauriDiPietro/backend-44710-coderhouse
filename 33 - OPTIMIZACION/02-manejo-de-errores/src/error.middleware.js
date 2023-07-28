export const errorMiddleware = (error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500
    res.status(status).send({
        error: error.name,
        message: error.message
    })
}
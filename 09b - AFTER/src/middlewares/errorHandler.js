export const errorHandler = (error, req, res, next) => {
    const status = error.status || 400;
    res.status(status).send(error.message);
}
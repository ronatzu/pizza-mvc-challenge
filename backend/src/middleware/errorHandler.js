export const errorHandler = (err, req, res) => {

    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';
    res.status(statusCode).json({ error: errorMessage });
};

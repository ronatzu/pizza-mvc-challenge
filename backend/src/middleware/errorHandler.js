export const errorHandler = (err, req, res) => {
    console.error(`[Error Handler] ${err.message}`);
    console.error(`URL: ${req.originalUrl} - Method: ${req.method}`);
    console.error(err.stack);

    const statusCode = err.status || 500;
    const errorMessage = err.message || 'Internal Server Error';
    res.status(statusCode).json({ error: errorMessage });
};

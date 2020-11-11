import express from 'express';
const app = express();

app.use((req, res) => {
    const err = new Error('404 - not found !!');
    err.status = 404;
    res.json({
        msg: '404 - not found !!',
        err: err
    });
});

export default app;
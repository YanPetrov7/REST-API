const express = require('express')
const { dataFileRouter, userRouter } = require('./routes/routes.js');

const app = express();

app.use(express.json());
app.use('/dataFiles', dataFileRouter);
app.use('/users', userRouter);

module.exports = app;
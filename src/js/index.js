const express = require('express')
const dataFileRoutes = require('./routes/dataFileRoutes.js');

const app = express();

app.use(express.json());
app.use('/dataFiles', dataFileRoutes);

module.exports = app;
const express = require('express');

const dataFileController = require( '../controllers/dataFilesController.js');
const userController = require('../controllers/userController.js');

const createRouter = ( controller ) => {
    const router = express.Router();

    router.get('/', controller.getAll);

    router.post('/', controller.create);

    router.get('/:id', controller.getById);

    router.delete('/:id', controller.delete);     

    router.patch('/:id', controller.update);

    return router;
}

const dataFileRouter = createRouter(dataFileController);
const userRouter = createRouter(userController);

module.exports = { dataFileRouter, userRouter };
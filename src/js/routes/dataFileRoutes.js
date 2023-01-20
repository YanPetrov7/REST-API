const express = require('express');
const controller = require( '../controllers/dataFilesController.js');

const createRouter = ( controller ) => {
    const router = express.Router();

    router.get('/', controller.getAll);

    router.post('/', controller.create);

    router.get('/:id', controller.getById);

    router.delete('/:id', controller.delete);     

    router.patch('/:id', controller.update);

    return router;
}

const router = createRouter(controller);

module.exports = router;
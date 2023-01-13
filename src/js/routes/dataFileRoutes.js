const express = require('express');
const { createDataFile, getDataFiles, getDataFile, deleteDataFile, updateDataFile } = require( '../controllers/dataFilesController.js');

const router = express.Router();

router.get('/', getDataFiles);

router.post('/', createDataFile);

router.get('/:id', getDataFile);

router.delete('/:id', deleteDataFile);     

router.patch('/:id', updateDataFile);

module.exports = router;
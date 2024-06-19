const express = require('express');
const router = express.Router();
const collection1Controller = require('../controllers/collection1Controller');

router.get('/', collection1Controller.getItems);
router.get('/:id', collection1Controller.getItem);
router.post('/', collection1Controller.createItem);
router.put('/:id', collection1Controller.updateItem);
router.delete('/:id', collection1Controller.deleteItem);

module.exports = router;

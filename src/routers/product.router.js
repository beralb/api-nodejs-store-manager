const express = require('express');

const { productController } = require('../controllers');

const router = express.Router();

router.get('/', productController.controllerProductsGetAll);

router.get('/:id', productController.controllerProductsById);

router.post('/', productController.controllerProductsCreate);

module.exports = router;

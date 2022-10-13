const express = require('express');

const productControllerModule = require('../controllers');
const productController = productControllerModule.productController;

const router = express.Router();

router.get('/', productController.controllerProductsGetAll);

router.get('/:id', productController.controllerProductsById);

module.exports = router;

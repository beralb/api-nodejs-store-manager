const express = require('express');

const validateProductName = require('../middlewares/validateProductName');

const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.controllerProductsGetAll);

router.get('/:id', productController.controllerProductsById);

router.post(
  '/',
  validateProductName,
  productController.controllerProductsCreate,
);

module.exports = router;
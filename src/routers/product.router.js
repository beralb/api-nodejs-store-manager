const express = require('express');

const validateProductInsert = require('../middlewares/validateProductInsert');

const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.controllerProductsGetAll);

router.get('/:id', productController.controllerProductsById);

router.put('/:id', validateProductInsert, productController.controllerUpdateProductById);

router.delete('/:id', productController.controllerDeleteProductById);

router.post(
  '/',
  validateProductInsert,
  productController.controllerProductsCreate,
);

module.exports = router;
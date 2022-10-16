const express = require('express');

const validateSaleDataInsert = require('../middlewares/validateSaleDataInsert');

const saleController = require('../controllers/sale.controller');

const router = express.Router();

router.post(
  '/',
  validateSaleDataInsert,
  saleController.controllerSaleCreate,
);

router.get(
  '/',
  saleController.controllerSalesGetAll,
);

router.get('/:id', saleController.controllerSalesById);

module.exports = router;

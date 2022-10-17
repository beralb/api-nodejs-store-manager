const saleService = require('../services/sale.service');

const controllerSalesGetAll = async (_req, res) => {
  const result = await saleService.serviceSalesGetAll();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Sale not found' });
  }
};

const controllerSalesById = async (req, res) => {
  const productId = Number(req.params.id);
  const result = await saleService.serviceSalesGetById(productId);

  if (result.length === 0) {
    res.status(404).json({ message: 'Sale not found' });
  } else {
    res.status(200).json(result);
  }
};

const controllerSaleCreate = async (req, res) => {
  const products = req.body;

  const saleObject = await saleService.serviceSalesInsert(products);

  if (!saleObject) { 
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.status(201).json(saleObject);
  }
};

module.exports = {
  controllerSaleCreate,
  controllerSalesGetAll,
  controllerSalesById,
};

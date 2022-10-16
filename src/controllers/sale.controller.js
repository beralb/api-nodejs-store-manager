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
  // console.log(`Controller linha 4: ${req.body}`);
  const products = req.body;
  // console.log(`Controller linha 6: ${products}`);

  const saleObject = await saleService.serviceSalesInsert(products);

  if (!saleObject) {
    // console.log(`SaleObject retornado: ${saleObject}`);    
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

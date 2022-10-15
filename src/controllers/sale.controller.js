const saleService = require('../services/sale.service');

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
};

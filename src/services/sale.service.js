const saleModel = require('../models/sale.model');

const serviceSalesGetAll = async () => {
  const sales = await saleModel.modelSalesGetAll();

  return sales;
};

const serviceSalesGetById = async (productId) => {
  const product = await saleModel.modelSalesGetById(productId);

  return product;
};

const serviceSalesInsert = async (sale) => {
  const insertedSale = await saleModel.modelSalesInsert(sale);

  return insertedSale;
};

module.exports = {
  serviceSalesInsert,
  serviceSalesGetAll,
  serviceSalesGetById,
};

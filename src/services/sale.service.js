const saleModel = require('../models/sale.model');

const serviceSalesInsert = async (sale) => {
  const insertedSale = await saleModel.modelSalesInsert(sale);
  // const insertedSale = await saleModel.validateProductId(sale);
  // const insertedSale = await saleModel.modelSalesInsert(sale);
  // console.log(`Sale linha 6 service: ${insertedSale}`);
  // console.log(insertedSale);

  return insertedSale;
};

module.exports = {
  serviceSalesInsert,
};

const models = require('../models/product.model');

const serviceProductsGetAll = async () => {
  const result = await models.modelProductsGetAll();
  
  return result;
};

const serviceProductsGetById = async (productId) => {
  const result = await models.modelProductsGetById(productId);
  
  return result;
};

module.exports = {
  serviceProductsGetAll,
  serviceProductsGetById,
};

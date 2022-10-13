// const errorMessages = require('../helpers/errorMessages');
// const statusCode = require('../helpers/statusCodes');
// const statusCodes = require('../helpers/statusCodes');

// const productModelModule = require('../models');

// const productModel = productModelModule.productModel;
// const modelProductsGetAll = productModel.modelProductsGetAll;
// const modelProductsGetById = productModel.modelProductsGetById;

const { productModel } = require('../models');

const { modelProductsGetAll, modelProductsGetById } = productModel;

const serviceProductsGetAll = async () => {
  const result = await modelProductsGetAll();
  
  return result;
};

const serviceProductsGetById = async (productId) => {
  const result = await modelProductsGetById(productId);
  
  return result;
};

module.exports = {
  serviceProductsGetAll,
  serviceProductsGetById,
};

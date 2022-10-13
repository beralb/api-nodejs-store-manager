const productModel = require('../models/product.model');

const serviceProductsGetAll = async () => {
  const products = await productModel.modelProductsGetAll();

  return products;
};

const serviceProductsGetById = async (productId) => {
  const product = await productModel.modelProductsGetById(productId);

  return product;
};

const serviceProductsInsert = async (name) => {
  const insertedProduct = await productModel.modelProductsInsert({ name });

  return insertedProduct;
};

module.exports = {
  serviceProductsGetAll,
  serviceProductsGetById,
  serviceProductsInsert,
};

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

const serviceUpdateProductById = async (productId, dataToUpdate) => {
  const updatedProduct = await productModel.modelUpdateProductById(productId, dataToUpdate);

  return updatedProduct;
};

module.exports = {
  serviceProductsGetAll,
  serviceProductsGetById,
  serviceProductsInsert,
  serviceUpdateProductById,
};

// const errorMessages = require('../helpers/errorMessages');
// const statusCodes = require('../helpers/statusCodes')

const productServiceModule = require('../services');
const productService = productServiceModule.productService;
const serviceProductsGetAll = productService.serviceProductsGetAll;
const serviceProductsGetById = productService.serviceProductsGetById;

const controllerProductsGetAll = async (_req, res) => {
  const result = await serviceProductsGetAll();

  if (result.length > 0) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }

}

const controllerProductsById = async (req, res) => {
  const productId = Number(req.params.id);
  console.log(`Controller linha 21: ${productId}`);
  const result = await serviceProductsGetById(productId);

  if (!result) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.status(200).json(result);
  }

};

module.exports = {
  controllerProductsGetAll,
  controllerProductsById,
}

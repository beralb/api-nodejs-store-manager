const productService = require('../services/product.service');

const message = { message: 'Product not found' };

const controllerProductsGetAll = async (_req, res) => {
  const result = await productService.serviceProductsGetAll();
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Product not found' });    
  }
};

const controllerProductsById = async (req, res) => {
  const productId = Number(req.params.id);
  const result = await productService.serviceProductsGetById(productId);

  if (!result) {
    res.status(404).json(message);
  } else {
    res.status(200).json(result);
  }
};

const controllerProductsCreate = async (req, res) => {
  const { name } = req.body;
  const result = await productService.serviceProductsInsert(name);

  if (!result) {
    res.status(404).json(message);
  } else {
    const productObject = {
      id: result,
      name,
    };

    res.status(201).json(productObject);
  }
};

const controllerUpdateProductById = async (req, res) => {
  const { name } = req.body;
  const productId = Number(req.params.id);
  const result = await productService.serviceUpdateProductById(productId, name);

  if (!result) {
    res.status(404).json(message);
  } else {
    res.status(200).json(result);
  }
};

const controllerDeleteProductById = async (req, res) => {
  const productId = Number(req.params.id);
  const affectedRows = await productService.serviceDeleteProductById(productId);

  if (affectedRows === 0) {
    res.status(404).json(message);
  } else {
    res.status(204).json();
  }
};

module.exports = {
  controllerProductsGetAll,
  controllerProductsById,
  controllerProductsCreate,
  controllerUpdateProductById,
  controllerDeleteProductById,
};

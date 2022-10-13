const productService = require('../services/product.service');

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
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.status(200).json(result);
  }
};

const controllerProductsCreate = async (req, res) => {
  const { name } = req.body;
  const result = await productService.serviceProductsInsert(name);

  if (!result) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    const productObject = {
      id: result,
      name,
    };

    res.status(201).json(productObject);
  }
};

module.exports = {
  controllerProductsGetAll,
  controllerProductsById,
  controllerProductsCreate,
};

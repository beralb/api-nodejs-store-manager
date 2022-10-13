const connection = require('./connection');

const modelProductsGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  // throw new Error("whatever");
  return result;
};

const modelProductsGetById = async (productId) => {
  console.log(`Model linha 12: ${productId}`);
  // const [[result]] = await connection.execute(
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [productId],
  );
  console.log(`Model linha 16: ${result}`);
  return result;
};

module.exports = {
  modelProductsGetAll,
  modelProductsGetById,
};

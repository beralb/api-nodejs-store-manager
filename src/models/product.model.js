const connection = require('./connection');

const modelProductsGetAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  // throw new Error("whatever");
  return result;
};

const modelProductsGetById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );

  return result;
};

const modelProductsInsert = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product.name],
  );

  return insertId;
};

module.exports = {
  modelProductsGetAll,
  modelProductsGetById,
  modelProductsInsert,
};

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

const modelUpdateProductById = async (prodId, dataToUpdate) => {
  const [result] = await connection
    .execute(`UPDATE StoreManager.products SET name = "${dataToUpdate}" WHERE id = ?`, [prodId]);

  if (result.affectedRows > 0) {
    return { id: prodId, name: dataToUpdate };
  }
};

const modelDeleteProductById = async (prodId) => {
  const [result] = await connection
    .execute('DELETE FROM StoreManager.products WHERE id = ?', [prodId]);
  
  console.log(result.affectedRows);
  return result.affectedRows;
};

module.exports = {
  modelProductsGetAll,
  modelProductsGetById,
  modelProductsInsert,
  modelUpdateProductById,
  modelDeleteProductById,
};

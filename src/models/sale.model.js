const connection = require('./connection');

const insertProductDB = async (insertId, sale) => {
  sale.forEach(async (eachSale) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
      [insertId, eachSale.productId, eachSale.quantity],
    );
  });

  const saleObject = {
    id: insertId,
    itemsSold: sale,
  };

  return saleObject;
};

const validateProductId = async (sale) => {
  const saleProductsIds = sale.map((eachSale) => eachSale.productId);

  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  const existingIds = result.map((eachId) => eachId.id);

  const comparing = saleProductsIds.some((eacheNumber) => !existingIds.includes(eacheNumber));

  if (comparing) {
    return false;
  }
  return true;
};

const modelSalesInsert = async (sale) => {
  const productIdExist = await validateProductId(sale);
  if (productIdExist === true) {
    const [{ insertId }] = await connection.execute(
      'INSERT INTO StoreManager.sales (id) VALUE (NULL)',
    );
    return insertProductDB(insertId, sale);
  }
};

module.exports = {
  modelSalesInsert,
  validateProductId,
};

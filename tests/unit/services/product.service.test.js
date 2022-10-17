const { expect } = require('chai');
const sinon = require('sinon');

const { mockProducts } = require('../mocks/product.mock');

const { productService } = require('../../../src/services');

describe('Testes da Camada Product Service', function () {
  beforeEach(function () {
    const { productModel } = require('../../../src/models');
    sinon.stub(productModel, 'modelProductsGetAll').resolves(mockProducts);
  });

  afterEach(function () {
    sinon.restore();
  });
  
  describe('Lista todos produtos', function () {
    it('com o tipo array', async function () {

      const products = await productService.serviceProductsGetAll();
      expect(products).to.be.a('array');
      expect(products.length).to.equal(2);
    });

    it('com sucesso', async function () {
      // const { productService } = require('../../../src/services');
      
      const products = await productService.serviceProductsGetAll();
      expect(products).to.deep.equal(mockProducts);
    });
  })
})
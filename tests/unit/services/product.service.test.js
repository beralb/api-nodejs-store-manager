// const { expect } = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');

const productModelModule = require('../../../src/models')
const productModel = productModelModule.productModel;

const mockedProductsModule = require('../mocks/product.mock')
const mockProducts = mockedProductsModule.mockProducts;


describe('Testes da Camada Product Service', function () {
  describe('Lista todos produtos', function () {
    beforeEach(function () {
      sinon.stub(productModel, 'modelProductsGetAll').resolves(mockProducts);
    });

    afterEach(function () {
      sinon.restore();
    });

    it('com o tipo array', async function () {
      const productServiceModule = require('../../../src/services')
      const productService = productServiceModule.productService;

      const response = await productService.serviceProductsGetAll();
      // console.log(`Linha 42 ${response}`);
      expect(response).to.be.a('array');
    });

    it('com sucesso', async function () {
      const productServiceModule = require('../../../src/services')
      const productService = productServiceModule.productService;

      const expected = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
        {
          "id": 2,
          "name": "Traje de encolhimento"
        },
      ];

      const response = await productService.serviceProductsGetAll();
      expect(response).to.deep.equal(expected);
    });
  })

})
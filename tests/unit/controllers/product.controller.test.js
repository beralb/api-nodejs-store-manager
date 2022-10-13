const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);


// const { returnService } = require('../mock/products.mock');

const productMockModule = require('../mocks/product.mock')
const returnService = productMockModule.returnService;

const productServiceModule = require('../../../src/services');
const productService = productServiceModule.productService;


const productControllerModule = require('../../../src/controllers');
const productController = productControllerModule.productController;

// chai.use(sinonChai);

describe('Testa controller de produtos', function () {
  describe('listagem de todos os produtos', function () {
    it('Se lista todos os produtos', async function () {
      const res = {};
      const req = {};
      
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productService, 'serviceProductsGetAll')
        .resolves(returnService);

      await productController.controllerProductsGetAll({}, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledOnceWith(returnService.message);
    });
  });
});
const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { returnServiceMock } = require('../mocks/product.mock');

chai.use(sinonChai);

describe('Testes da Camada Product Controller', function () {
  beforeEach(function () {
    const productService = require('../../../src/services/product.service');
    sinon.stub(productService, 'serviceProductsGetAll').resolves(returnServiceMock.message);
  })
  
  afterEach(() => sinon.restore());

  describe('listagem de todos os produtos', function () {
    it('Se lista todos os produtos', async function () {
      const { productController: { controllerProductsGetAll } } = require('../../../src/controllers');
      
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      
      await controllerProductsGetAll(null, res);

      expect(res.status).to.have.been.calledOnceWith(200);
      expect(res.json).to.have.been.calledOnceWith(returnServiceMock.message);
    });
  });
});

// describe('Testa controller de produtos', function () {
//   describe('listagem de todos os produtos', function () {
//     it('Se lista todos os produtos', async function () {
//       const productServiceModule = require('../../../src/services');
//       const productService = productServiceModule.productService;

//       const res = {};
//       const req = {};
      
//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();
//       sinon
//         .stub(productService, 'serviceProductsGetAll')
//         .resolves(returnService);

//       await productController.controllerProductsGetAll({}, res);

//       expect(res.status).to.have.been.calledOnceWith(200);
//       expect(res.json).to.have.been.calledOnceWith(returnService.message);
//     });
//   });
// });

// describe('Verificando controller Driver - Exercícios', function () {
//   afterEach(sinon.restore);
  
//   describe('Listando motoristas', function () {
//     beforeEach(function () {
//       sinon
//         .stub(productService, 'serviceProductsGetAll')
//         .resolves({ type: null, message: mockProducts });
//     });

//     it('é chamado o status com o código 200', async function () {
//       const res = {};
//       const req = {};

//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();

//       await driverController.getDrivers(req, res);

//       expect(res.status).to.have.been.calledOnceWith(200);
//     });
//   });
  
// });
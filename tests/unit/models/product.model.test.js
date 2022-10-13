// const { expect } = require('chai');
const expect = require('chai').expect;
const sinon = require('sinon');

const productModelModule = require('../../../src/models')
const productModel = productModelModule.productModel;


const connection = require('../../../src/models/connection');

describe('Testes da Camada Product Model', function () {
  describe('Lista todos produtos', function () {
    beforeEach(function () {
      const mockedProducts = [
        {
          id: 1,
          name: "Martelo de Thor"
        },
        {
          id: 2,
          name: "Traje de encolhimento"
        },
      ];
      sinon.stub(connection, 'execute').resolves([mockedProducts]);
    });

    afterEach(function () {
      connection.execute.restore();
    });

    it('com o tipo array', async function () {
      const response = await productModel.modelProductsGetAll();

      expect(response).to.be.a('array');
    });

    it('com sucesso', async function () {
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

      const response = await productModel.modelProductsGetAll();
      expect(response).to.deep.equal(expected);
    });
  })


  /* describe('Encontra um produto pelo id', function () {
    const expected = {
      "id": 1,
      "name": "Martelo de Thor"
    }

    const searchedId = 1;

    before(async function () {
      const searchedDriverMock = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        }
      ];

      sinon.stub(connection, 'execute').resolves([searchedDriverMock]);
    });

    it('Retorna o produto como objeto', async function () {
      sinon.stub(connection, 'execute').resolves([expected]);

      const result = await productsModel.getById(searchedId);

      expect(result).to.be.a('object');
    });

    it('com sucesso', async function () {

      const response = await productsModel.findById(searchedId);

      expect(response).to.deep.equal(expected[0]);
    });
    after(async function () {
      connection.execute.restore();
    });
  }); */
  
})
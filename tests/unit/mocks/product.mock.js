const mockProducts = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
  {
    id: 2,
    name: "Traje de encolhimento"
  },
];

const returnServiceMock = {
  status: 200,
  message: mockProducts
}

module.exports = {
  mockProducts,
  returnServiceMock,
}
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

const returnService = {
  status: 200,
  message: mockProducts
}

module.exports = {
  mockProducts,
  returnService,
}
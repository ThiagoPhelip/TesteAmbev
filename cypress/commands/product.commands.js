// Commands de produto (API + massa dinâmica).
const ProductsService = require('../services/ProductsService');
const ProductFactory = require('../factories/ProductFactory');

Cypress.Commands.add('gerarProduto', () => ProductFactory.createProduct());

Cypress.Commands.add('criarProdutoViaApi', (product, token) => {
  const service = new ProductsService();
  return service.criar(product, { token }).then((response) => {
    expect(response.status).to.eq(201);
    return response;
  });
});

Cypress.Commands.add('excluirProduto', (id, token) => {
  if (!id) return cy.wrap(null);
  const service = new ProductsService();
  return service.excluir(id, { token });
});

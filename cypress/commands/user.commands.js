// Commands de usuário (API + massa dinâmica).
const UsersService = require('../services/UsersService');
const UserFactory = require('../factories/UserFactory');

Cypress.Commands.add('gerarUsuario', (admin = false) => {
  return admin ? UserFactory.createAdmin() : UserFactory.createUser();
});

// Cria usuário via API e valida 201; retorna response
Cypress.Commands.add('criarUsuarioViaApi', (user) => {
  const service = new UsersService();
  return service.criar(user).then((response) => {
    expect(response.status).to.eq(201);
    return response;
  });
});

// Limpa usuário criado durante o teste
Cypress.Commands.add('excluirUsuario', (id) => {
  if (!id) return cy.wrap(null);
  const service = new UsersService();
  return service.excluir(id);
});

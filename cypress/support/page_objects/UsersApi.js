// Page Object / Service para a API de Usuários do ServeRest
// Encapsula os endpoints e reduz duplicação entre os testes.
class UsersApi {
  static baseUrl = '/usuarios';

  listarUsuarios() {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}${UsersApi.baseUrl}`,
      failOnStatusCode: false,
    });
  }

  criarUsuario(user) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}${UsersApi.baseUrl}`,
      body: user,
      failOnStatusCode: false,
    });
  }

  buscarUsuarioPorId(id) {
    return cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}${UsersApi.baseUrl}/${id}`,
      failOnStatusCode: false,
    });
  }

  excluirUsuario(id) {
    return cy.request({
      method: 'DELETE',
      url: `${Cypress.env('apiUrl')}${UsersApi.baseUrl}/${id}`,
      failOnStatusCode: false,
    });
  }
}

export default UsersApi;

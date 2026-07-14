// Page Object / Service para a API de Autenticação do ServeRest
class LoginApi {
  static baseUrl = '/login';

  login(email, password) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('apiUrl')}${LoginApi.baseUrl}`,
      body: { email, password },
      failOnStatusCode: false,
    });
  }
}

export default LoginApi;

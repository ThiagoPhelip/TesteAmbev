// Commands de login (frontend + API).
const LoginPage = require('../pages/LoginPage');
const LoginService = require('../services/LoginService');
const UserFactory = require('../factories/UserFactory');

Cypress.Commands.add('loginPage', () => new LoginPage());

Cypress.Commands.add('loginUi', (email, password) => {
  return new LoginPage().loginComo(email, password);
});

// Autentica via API e retorna o token (diferencial: acelera cenários de frontend)
Cypress.Commands.add('loginApi', (email, password) => {
  const service = new LoginService();
  return service.login(email, password).then((response) => {
    expect(response.status).to.eq(200);
    return response.body.authorization;
  });
});

// Reutiliza sessão autenticada via cy.session (diferencial)
Cypress.Commands.add('loginSession', (email, password) => {
  cy.session(
    [email, password],
    () => {
      cy.loginApi(email, password).then((token) => {
        Cypress.env('authToken', token);
      });
    },
    { cacheAcrossSpecs: true },
  );
});

Cypress.Commands.add('validCredentials', () => UserFactory.validCredentials());

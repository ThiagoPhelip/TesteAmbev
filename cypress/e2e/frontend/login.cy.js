// Frontend - Login: positivos e negativos no mesmo arquivo.
const LoginPage = require('../../pages/LoginPage');
const UserFactory = require('../../factories/UserFactory');
const routes = require('../../utils/routes');

const loginPage = new LoginPage();

describe('Frontend - Login', () => {
  context('Positivos', () => {
    it('deve realizar login com sucesso e redirecionar para home', () => {
      const creds = UserFactory.validCredentials();
      loginPage.loginComo(creds.email, creds.password);

      cy.url({ timeout: 10000 }).should('include', routes.home);
      cy.contains('Serverest', { timeout: 10000 }).should('be.visible');
    });
  });

  context('Negativos', () => {
    it('deve exibir mensagem de erro com senha incorreta', () => {
      const creds = UserFactory.validCredentials();
      loginPage.loginComo(creds.email, 'senha_errada_123');

      cy.get('.alert', { timeout: 8000 }).should('be.visible');
      cy.url().should('include', routes.login);
    });

    it('deve bloquear submit sem senha (permanece em login)', () => {
      const creds = UserFactory.validCredentials();
      loginPage.visitar().preencherEmail(creds.email).submeter();

      cy.url().should('include', routes.login);
    });
  });
});

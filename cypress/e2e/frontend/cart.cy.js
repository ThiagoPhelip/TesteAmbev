// Frontend - Carrinho: demonstra uso de sessão autenticada via cy.session.
// Observação: os seletores de carrinho dependem da UI do ServeRest;
// o fluxo de autenticação é preparado via API para reduzir tempo de execução.
const LoginPage = require('../../pages/LoginPage');
const UserFactory = require('../../factories/UserFactory');
const routes = require('../../utils/routes');

describe('Frontend - Carrinho', () => {
  context('Positivos', () => {
    it('deve preparar sessão autenticada e acessar área logada', () => {
      const creds = UserFactory.validCredentials();
      cy.loginSession(creds.email, creds.password);

      // Acesso direto à home já autenticado (reutiliza sessão)
      new LoginPage().visitar().getUrl().should('include', routes.login);
      cy.visit(routes.home, { failOnStatusCode: false });
      cy.contains('Serverest', { timeout: 10000 }).should('be.visible');
    });
  });
});

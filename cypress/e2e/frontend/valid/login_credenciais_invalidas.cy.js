import LoginPage from '../../../support/page_objects/LoginPage';

describe('Frontend - Login com credenciais inválidas (Funcional / negative)', () => {
  const loginPage = new LoginPage();

  it('deve exibir mensagem de erro quando senha está incorreta', () => {
    loginPage.visitar().preencherEmail('fulano@qa.com').preencherSenha('senha_errada').submeter();

    // Valida o comportamento de erro esperado no frontend
    cy.get('.alert', { timeout: 8000 }).should('be.visible');
    cy.url().should('include', '/login');
  });
});

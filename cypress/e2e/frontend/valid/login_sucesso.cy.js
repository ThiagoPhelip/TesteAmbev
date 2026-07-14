import LoginPage from '../../../support/page_objects/LoginPage';

describe('Frontend - Login com sucesso (Funcional)', () => {
  const loginPage = new LoginPage();

  it('deve realizar login e redirecionar para a home logada', () => {
    loginPage.visitar().preencherEmail('fulano@qa.com').preencherSenha('teste').submeter();

    // Assertivas claras: valida URL e elemento visível após login
    cy.url().should('include', '/home');
    cy.contains('Serverest', { timeout: 10000 }).should('be.visible');
  });
});

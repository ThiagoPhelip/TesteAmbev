import LoginPage from '../../../support/page_objects/LoginPage';

describe('Frontend - Cadastro de novo usuário (Funcional)', () => {
  const loginPage = new LoginPage();

  it('deve cadastrar um usuário com dados dinâmicos e logar com sucesso', () => {
    const suffix = Date.now();
    const nome = `Usuario QA ${suffix}`;
    const email = `qa.${suffix}@serverest.dev`;
    const senha = 'teste@123';

    // Navega para a tela de cadastro
    cy.visit('/cadastrarusuario', { failOnStatusCode: false });
    cy.get('[data-testid="nome"]').type(nome);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(senha);
    cy.get('[data-testid="cadastrar"]').click();

    // Após cadastro, o sistema loga automaticamente -> valida home
    cy.url({ timeout: 10000 }).should('include', '/home');
    cy.contains('Serverest').should('be.visible');
  });
});

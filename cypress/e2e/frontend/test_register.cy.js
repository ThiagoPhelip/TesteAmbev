describe('Frontend - User Registration', () => {
  it('should register a new user', () => {
    const user = {
      name: `Usuario Teste ${Date.now()}`,
      email: `teste${Date.now()}@qa.com`,
      password: 'teste123'
    };

    cy.visit('/cadastro');
    cy.get('#nome').type(user.name);
    cy.get('#email').type(user.email);
    cy.get('#password').type(user.password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home');
  });
});
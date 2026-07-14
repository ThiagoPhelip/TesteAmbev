describe('Frontend - Login', () => {
  it('should login successfully', () => {
    cy.visit('/login');
    cy.get('#email').type('fulano@qa.com');
    cy.get('#password').type('teste');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/home');
    cy.get('.welcome-message').should('be.visible');
  });
});
describe('Frontend - Dashboard Access', () => {
  it('should navigate to dashboard after login', () => {
    cy.visit('/login');
    cy.get('#email').type('fulano@qa.com');
    cy.get('#password').type('teste');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('.dashboard-title').should('be.visible');
  });
});
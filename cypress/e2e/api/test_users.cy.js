describe('API - Users List', () => {
  it('should retrieve users list', () => {
    cy.request('GET', '/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.have.length.at.least(1);
    });
  });
});
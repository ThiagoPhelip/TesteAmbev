describe('API - User Creation', () => {
  it('should create a new user', () => {
    const newUser = {
      name: 'Fulano de Tal',
      email: 'fulano@qa.com',
      password: 'teste123'
    };

    cy.request('POST', '/users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.id).to.be.a('string');
      expect(response.body.email).to.eq(newUser.email);
    });
  });
});
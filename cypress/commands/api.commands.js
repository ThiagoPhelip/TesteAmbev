// Commands de infraestrutura de API (auth helper reutilizável).
const LoginService = require('../services/LoginService');

// Obtém token de admin válido (usado para testes que exigem autenticação)
Cypress.Commands.add('obterToken', (email, password) => {
  const service = new LoginService();
  return service.login(email, password).then((response) => {
    expect(response.status).to.eq(200);
    return response.body.authorization;
  });
});

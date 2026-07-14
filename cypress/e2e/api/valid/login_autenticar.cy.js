import LoginApi from '../../../support/page_objects/LoginApi';

describe('API - Autenticação / Login (Funcional)', () => {
  const loginApi = new LoginApi();

  it('deve autenticar com credenciais válidas e retornar um token Bearer', () => {
    loginApi.login('fulano@qa.com', 'teste').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
      expect(response.body.authorization).to.be.a('string');
      expect(response.body.authorization.length).to.be.greaterThan(10);
    });
  });

  it('deve retornar 401 com credenciais inválidas', () => {
    loginApi.login('fulano@qa.com', 'senha_errada').then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Email e/ou senha inválidos');
    });
  });
});

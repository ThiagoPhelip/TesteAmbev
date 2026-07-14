import UsersApi from '../../../support/page_objects/UsersApi';

describe('API - Listagem de Usuários (Funcional)', () => {
  const usersApi = new UsersApi();

  it('deve retornar status 200 e uma lista de usuários', () => {
    usersApi.listarUsuarios().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('quantidade');
      expect(response.body.usuarios).to.be.an('array');
      expect(response.body.usuarios.length).to.be.greaterThan(0);
    });
  });
});

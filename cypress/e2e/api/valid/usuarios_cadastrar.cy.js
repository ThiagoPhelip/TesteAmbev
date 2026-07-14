import UsersApi from '../../../support/page_objects/UsersApi';

describe('API - Cadastro de Usuário (Funcional)', () => {
  const usersApi = new UsersApi();
  let usuarioCriado;

  // Massa de dados preparada antes do teste (dados dinâmicos)
  before(() => {
    cy.gerarUsuario(true).then((user) => {
      usuarioCriado = user;
    });
  });

  // Limpeza dos dados criados (boa prática: sem deixar lixo)
  after(() => {
    if (usuarioCriado && usuarioCriado._id) {
      usersApi.excluirUsuario(usuarioCriado._id);
    }
  });

  it('deve cadastrar um novo usuário e retornar 201 com o _id', () => {
    usersApi.criarUsuario(usuarioCriado).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body).to.have.property('_id');
      usuarioCriado._id = response.body._id; // guarda para o after()
    });
  });
});

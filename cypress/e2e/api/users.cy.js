// API - Usuários: cenários positivos e negativos no mesmo arquivo.
const UsersService = require('../../services/UsersService');
const UserFactory = require('../../factories/UserFactory');
const validators = require('../../utils/validators');
const constants = require('../../utils/constants');

const usersService = new UsersService();

describe('API - Usuários', () => {
  context('Positivos', () => {
    it('deve listar usuários com schema válido', () => {
      usersService.listar().then((response) => {
        expect(response.status).to.eq(constants.httpStatus.ok);
        expect(response.body).to.have.property('quantidade');
        expect(response.body.usuarios).to.be.an('array').and.have.length.greaterThan(0);
        validators.assertValid('userResponse', response.body.usuarios[0]);
      });
    });

    it('deve cadastrar usuário e validar contrato + persistência', () => {
      const user = UserFactory.createUser();
      let createdId;

      usersService
        .criar(user)
        .then((response) => {
          expect(response.status).to.eq(constants.httpStatus.created);
          expect(response.body.message).to.eq(constants.messages.userCreated);
          validators.assertValid('userCreated', response.body);
          createdId = response.body._id;

          // Persistência: busca o usuário recém-criado
          return usersService.buscar(createdId);
        })
        .then((getResponse) => {
          expect(getResponse.status).to.eq(constants.httpStatus.ok);
          expect(getResponse.body.email).to.eq(user.email);
        })
        .then(() => usersService.excluir(createdId)); // cleanup automático
    });
  });

  context('Negativos', () => {
    it('deve rejeitar cadastro sem campos obrigatórios (400)', () => {
      usersService.criar({}).then((response) => {
        expect(response.status).to.eq(constants.httpStatus.badRequest);
        expect(response.body).to.exist;
      });
    });
  });
});

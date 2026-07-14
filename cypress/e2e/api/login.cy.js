// API - Login/Autenticação: positivos e negativos no mesmo arquivo.
const LoginService = require('../../services/LoginService');
const UserFactory = require('../../factories/UserFactory');
const validators = require('../../utils/validators');
const constants = require('../../utils/constants');

const loginService = new LoginService();

describe('API - Login', () => {
  context('Positivos', () => {
    it('deve autenticar com credenciais válidas e retornar token (schema)', () => {
      const creds = UserFactory.validCredentials();
      loginService.login(creds.email, creds.password).then((response) => {
        expect(response.status).to.eq(constants.httpStatus.ok);
        validators.assertValid('loginResponse', response.body);
        expect(response.body.authorization.length).to.be.greaterThan(10);
      });
    });
  });

  context('Negativos', () => {
    it('deve retornar 401 com senha incorreta', () => {
      const creds = UserFactory.validCredentials();
      loginService.login(creds.email, 'senha_errada_123').then((response) => {
        expect(response.status).to.eq(constants.httpStatus.unauthorized);
        expect(response.body.message).to.eq(constants.messages.loginInvalid);
      });
    });

    it('deve retornar erro com e-mail em formato inválido', () => {
      loginService.login('email_invalido', 'teste').then((response) => {
        expect(response.status).to.be.oneOf([
          constants.httpStatus.unauthorized,
          constants.httpStatus.badRequest,
        ]);
      });
    });
  });
});

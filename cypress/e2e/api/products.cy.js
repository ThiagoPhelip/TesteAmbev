// API - Produtos: positivos e negativos no mesmo arquivo.
const ProductsService = require('../../services/ProductsService');
const LoginService = require('../../services/LoginService');
const ProductFactory = require('../../factories/ProductFactory');
const UserFactory = require('../../factories/UserFactory');
const validators = require('../../utils/validators');
const constants = require('../../utils/constants');

const productsService = new ProductsService();
const loginService = new LoginService();

describe('API - Produtos', () => {
  context('Positivos', () => {
    it('deve cadastrar produto autenticado e validar contrato', () => {
      const admin = UserFactory.validCredentials();
      const product = ProductFactory.createProduct();
      let createdId;
      let token;

      // Prepara cenário autenticado via API (diferencial: reduz tempo de execução)
      loginService
        .login(admin.email, admin.password)
        .then((response) => {
          expect(response.status).to.eq(constants.httpStatus.ok);
          token = response.body.authorization;
          return productsService.criar(product, { token });
        })
        .then((response) => {
          expect(response.status).to.eq(constants.httpStatus.created);
          validators.assertValid('productResponse', response.body);
          createdId = response.body._id;
          return productsService.buscar(createdId, { token });
        })
        .then((getResponse) => {
          expect(getResponse.status).to.eq(constants.httpStatus.ok);
          expect(getResponse.body.nome).to.eq(product.nome);
        })
        .then(() => productsService.excluir(createdId, { token })); // cleanup
    });
  });

  context('Negativos', () => {
    it('deve rejeitar cadastro de produto sem autenticação (401)', () => {
      const product = ProductFactory.createProduct();
      productsService.criar(product).then((response) => {
        expect(response.status).to.eq(constants.httpStatus.unauthorized);
      });
    });
  });
});

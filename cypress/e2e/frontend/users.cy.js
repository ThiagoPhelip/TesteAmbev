// Frontend - Cadastro de Usuário: positivos e negativos no mesmo arquivo.
const UsersPage = require('../../pages/UsersPage');
const UserFactory = require('../../factories/UserFactory');
const routes = require('../../utils/routes');

const usersPage = new UsersPage();

describe('Frontend - Cadastro de Usuário', () => {
  context('Positivos', () => {
    it('deve cadastrar usuário com dados dinâmicos e logar na home', () => {
      const user = UserFactory.createUser();
      usersPage.cadastrarUsuario(user);

      cy.url({ timeout: 10000 }).should('include', routes.home);
      cy.contains('Serverest', { timeout: 10000 }).should('be.visible');
    });
  });

  context('Negativos', () => {
    it('deve exigir e-mail válido (botão de cadastro desabilitado ou erro)', () => {
      const user = UserFactory.createUser();
      usersPage
        .visitar()
        .preencherNome(user.nome)
        .preencherSenha(user.password)
        .cadastrar();

      // Sem e-mail, a UI não deve completar o cadastro
      cy.url().should('include', routes.cadastroUsuario);
    });
  });
});

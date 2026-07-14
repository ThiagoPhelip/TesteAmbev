// Page Object da tela de Cadastro de Usuário. Herda BasePage.
const BasePage = require('./BasePage');
const selectors = require('../selectors/users.selectors');
const routes = require('../utils/routes');

class UsersPage extends BasePage {
  constructor() {
    super();
    this.route = routes.cadastroUsuario;
  }

  preencherNome(nome) {
    return this.type(selectors.nome, nome);
  }

  preencherEmail(email) {
    return this.type(selectors.email, email);
  }

  preencherSenha(senha) {
    return this.type(selectors.password, senha);
  }

  cadastrar() {
    return this.click(selectors.cadastrar);
  }

  cadastrarUsuario({ nome, email, password }) {
    return this.visitar()
      .preencherNome(nome)
      .preencherEmail(email)
      .preencherSenha(password)
      .cadastrar();
  }
}

module.exports = UsersPage;

// Page Object da tela de Login. Herda BasePage.
const BasePage = require('./BasePage');
const selectors = require('../selectors/login.selectors');
const routes = require('../utils/routes');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.route = routes.login;
  }

  preencherEmail(email) {
    return this.type(selectors.email, email);
  }

  preencherSenha(senha) {
    return this.type(selectors.senha, senha);
  }

  submeter() {
    return this.click(selectors.entrar);
  }

  loginComo(email, senha) {
    return this.visitar().preencherEmail(email).preencherSenha(senha).submeter();
  }

  validarErro() {
    return this.shouldBeVisible(selectors.alerta);
  }
}

module.exports = LoginPage;

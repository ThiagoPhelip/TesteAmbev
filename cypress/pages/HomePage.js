// Page Object da tela Home. Herda BasePage.
const BasePage = require('./BasePage');
const selectors = require('../selectors/home.selectors');
const routes = require('../utils/routes');

class HomePage extends BasePage {
  constructor() {
    super();
    this.route = routes.home;
  }

  validarPaginaInicial() {
    this.shouldBeVisible(selectors.navbar);
    return this;
  }
}

module.exports = HomePage;

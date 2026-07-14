// Classe base para todos os Page Objects de UI.
// Encapsula ações reutilizáveis do Cypress (DRY / Single Responsibility).
class BasePage {
  visitar(route) {
    const path = route || this.route || '/';
    cy.visit(path, { failOnStatusCode: false, timeout: 30000 });
    return this;
  }

  click(selector) {
    cy.get(selector).should('be.visible');
    cy.get(selector).click();
    return this;
  }

  type(selector, text) {
    cy.get(selector).should('be.visible');
    cy.get(selector).clear();
    cy.get(selector).type(text);
    return this;
  }

  clear(selector) {
    cy.get(selector).clear();
    return this;
  }

  shouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
    return this;
  }

  shouldContain(selector, text) {
    cy.get(selector).should('contain', text);
    return this;
  }

  waitLoading() {
    cy.get('body').should('be.visible');
    return this;
  }

  getUrl() {
    return cy.url();
  }
}

module.exports = BasePage;

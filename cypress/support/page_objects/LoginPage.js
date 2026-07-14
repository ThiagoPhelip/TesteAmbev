// Page Object para a tela de Login do frontend (ServeRest)
class LoginPage {
  visitar() {
    cy.visit('/login', { failOnStatusCode: false });
    return this;
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').type(email);
    return this;
  }

  preencherSenha(senha) {
    cy.get('[data-testid="senha"]').type(senha);
    return this;
  }

  submeter() {
    cy.get('[data-testid="entrar"]').click();
    return this;
  }

  loginComo(email, senha) {
    this.visitar().preencherEmail(email).preencherSenha(senha).submeter();
    return this;
  }

  validarMensagemErro() {
    cy.get('.alert', { timeout: 8000 }).should('be.visible');
    return this;
  }
}

export default LoginPage;

import UsersApi from './page_objects/UsersApi';
import LoginApi from './page_objects/LoginApi';
import LoginPage from './page_objects/LoginPage';

// ------------------------------------------------
// Commands customizados reutilizáveis
// Evitam duplicação e centralizam setup/teardown
// ------------------------------------------------

// Gera massa de dados dinâmica e única por execução
Cypress.Commands.add('gerarUsuario', (admin = false) => {
  const suffix = Date.now();
  return {
    nome: `Usuario QA ${suffix}`,
    email: `qa.${suffix}@serverest.dev`,
    password: 'teste@123',
    administrador: admin ? 'true' : 'false',
  };
});

// Cria usuário via API e devolve o response (com _id)
Cypress.Commands.add('criarUsuarioViaApi', (user) => {
  const usersApi = new UsersApi();
  return usersApi.criarUsuario(user).then((response) => {
    expect(response.status).to.eq(201);
    return response;
  });
});

// Cria + autentica, retornando o token (útil p/ testes autenticados)
Cypress.Commands.add('loginViaApi', (email, password) => {
  const loginApi = new LoginApi();
  return loginApi.login(email, password).then((response) => {
    expect(response.status).to.eq(200);
    return response.body.authorization;
  });
});

// Page Objects expostos como commands para facilitar o uso
Cypress.Commands.add('loginPage', () => new LoginPage());

// Limpa um usuário criado (teardown)
Cypress.Commands.add('excluirUsuario', (id) => {
  if (!id) return cy.wrap(null);
  const usersApi = new UsersApi();
  return usersApi.excluirUsuario(id);
});

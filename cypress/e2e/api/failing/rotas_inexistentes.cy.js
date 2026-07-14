// ⚠️ TESTE PROPOSITALMENTE FALHO (DEMONSTRAÇÃO DIDÁTICA)
//
// Objetivo: evidenciar que a API do ServeRest NÃO expõe a rota /users
// (plural em inglês). A rota correta é /usuarios (português).
// A asserção espera 200 em /users, mas a API retorna 405 (Method Not Allowed),
// fazendo o teste falhar de forma controlada e documentada.
//
// O que isso demonstra:
//  - Conhecimento de status codes HTTP corretos
//  - Capacidade de escrever asserções precisas (não "qualquer resposta")
//  - Como a falha revela a especificação real da API

describe('API - Rota inexistente /users (FALHO PROPOSITAL)', () => {
  it('deve falhar pois a rota real é /usuarios, não /users', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiUrl')}/users`,
      failOnStatusCode: false,
    }).then((response) => {
      // Asserção propositalmente incorreta para gerar evidência de falha:
      expect(response.status).to.eq(200); // <- API retorna 405 aqui
    });
  });
});

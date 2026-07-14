// ⚠️ TESTE PROPOSITALMENTE FALHO (DEMONSTRAÇÃO DIDÁTICA)
//
// Objetivo: evidenciar o comportamento ao navegar para uma rota inexistente.
// A asserção espera que a URL contenha /painel-admin, mas o ServeRest não
// possui essa rota (retorna 404 / página de erro). A falha é documentada
// para mostrar validação de roteamento e tratamento de 404 no frontend.
//
// O que isso demonstra:
//  - Conhecimento de roteamento de SPA e rotas inválidas
//  - Assertivas de URL corretas por ambiente
//  - Separação clara entre evidência de falha e bug real

describe('Frontend - Navegação para rota inexistente (FALHO PROPOSITAL)', () => {
  it('deve falhar pois /painel-admin não existe no ServeRest', () => {
    cy.visit('/painel-admin', { failOnStatusCode: false });

    // Asserção incorreta de propósito -> gera evidência de falha
    cy.url().should('include', '/painel-admin'); // <- rota cai em erro 404
  });
});

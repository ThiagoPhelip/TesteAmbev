import LoginPage from '../../../support/page_objects/LoginPage';

// ⚠️ TESTE PROPOSITALMENTE FALHO (DEMONSTRAÇÃO DIDÁTICA)
//
// Objetivo: evidenciar que o submit com e-mail preenchido e senha vazia
// deve ser bloqueado pela UI. A asserção espera redirecionamento para /home,
// mas o sistema mantém na /login (senha obrigatória). A falha é documentada
// para mostrar validação de formulário no frontend.
//
// O que isso demonstra:
//  - Conhecimento de validação de formulários (required fields)
//  - Assertivas corretas sobre permanência na mesma rota
//  - Como separar testes negativos "esperados" de falhas reais

describe('Frontend - Submeter login sem senha (FALHO PROPOSITAL)', () => {
  const loginPage = new LoginPage();

  it('deve falhar pois a UI bloqueia submit sem senha (continua em /login)', () => {
    loginPage.visitar().preencherEmail('fulano@qa.com').submeter();

    // Asserção incorreta de propósito -> gera evidência de falha
    cy.url().should('include', '/home'); // <- UI mantém em /login
  });
});

// ⚠️ TESTE PROPOSITALMENTE FALHO (DEMONSTRAÇÃO DIDÁTICA)
//
// Objetivo: evidenciar o comportamento do Cypress quando um seletor não
// existe na página (timeout de elemento). Usamos um data-testid inexistente
// de propósito. Isso demonstra: tratamento de seletores frágeis, uso de
// timeouts e leitura de erros de "element not found".
//
// O que isso demonstra:
//  - Compreensão dos mecanismos de retry/timeout do Cypress
//  - Identificação rápida de seletores quebrados
//  - Como documentar a intenção de falha

describe('Frontend - Seletor inexistente (FALHO PROPOSITAL)', () => {
  it('deve falhar pois o seletor [data-testid="botao_magico"] não existe', () => {
    cy.visit('/login');
    // Seletor propositalmente inexistente -> Cypress aguarda e falha (timeout)
    cy.get('[data-testid="botao_magico"]', { timeout: 5000 }).should('be.visible');
  });
});

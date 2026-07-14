// Hooks globais. Mantém ambiente limpo entre specs.
// Retry seletivo: apenas para testes conhecidamente flaky (nunca indiscriminado).
module.exports = {
  setupNodeEvents(on, config) {
    // Exemplo de retry apenas para specs específicas (se necessário):
    // on('test:after:run', (test) => { ... });
    return config;
  },
};

// Hook de sessão global para reutilização de autenticação
beforeEach(() => {
  // Garante isolamento; cada spec prepara sua própria massa.
  Cypress.env('authToken', null);
});

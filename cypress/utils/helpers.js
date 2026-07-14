// Funções auxiliares puras e reutilizáveis (sem dependência do Cypress quando possível).
const helpers = {
  // Gera timestamp único para evitar colisão de massa entre execuções
  uniqueSuffix() {
    return Date.now();
  },

  // Normaliza e-mail para namespace único: qa.1710000000@serverest.dev
  uniqueEmail() {
    return `qa.${Date.now()}@serverest.dev`;
  },

  // Loga passos de teste de forma consistente (facilita debugging)
  logStep(message) {
    // eslint-disable-next-line no-console
    console.log(`[STEP] ${message}`);
  },

  // Remove chaves nulas/undefined de um objeto (útil para payloads)
  compact(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([, v]) => v !== undefined && v !== null),
    );
  },
};

module.exports = helpers;

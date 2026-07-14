// Centraliza URLs e timeouts do ambiente.
// Valores podem ser sobrescritos por variáveis de ambiente (CI / .env).
require('dotenv').config();

const environment = {
  baseUrl: process.env.BASE_URL || 'https://front.serverest.dev',
  apiUrl: process.env.API_URL || 'https://serverest.dev',
  timeouts: {
    defaultCommand: 8000,
    request: 10000,
    pageLoad: 30000,
  },
};

module.exports = environment;

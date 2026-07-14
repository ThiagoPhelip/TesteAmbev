// Centraliza endpoints da API. Nunca espalhar rotas pelos testes.
const api = {
  auth: {
    login: '/login',
  },
  users: {
    base: '/usuarios',
    byId: (id) => `/usuarios/${id}`,
  },
  products: {
    base: '/produtos',
    byId: (id) => `/produtos/${id}`,
  },
};

module.exports = api;

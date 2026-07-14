// Factory de usuários — gera massa única a cada execução (Faker).
const fakerUtils = require('../utils/faker');
const helpers = require('../utils/helpers');
const constants = require('../utils/constants');

const UserFactory = {
  // Usuário comum (não admin)
  createUser() {
    const suffix = helpers.uniqueSuffix();
    return {
      nome: `${fakerUtils.nome()} ${suffix}`,
      email: `qa.${suffix}@serverest.dev`,
      password: fakerUtils.senha(),
      administrador: constants.roles.user,
    };
  },

  // Usuário administrador
  createAdmin() {
    const base = this.createUser();
    return { ...base, administrador: constants.roles.admin };
  },

  // Credenciais válidas conhecidas da base de dados do ServeRest
  validCredentials() {
    return {
      email: process.env.EMAIL || 'fulano@qa.com',
      password: process.env.PASSWORD || 'teste',
    };
  },
};

module.exports = UserFactory;

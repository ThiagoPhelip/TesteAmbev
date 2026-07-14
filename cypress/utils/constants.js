// Constantes de domínio reutilizáveis (mensagens, roles, etc.).
const constants = {
  messages: {
    userCreated: 'Cadastro realizado com sucesso',
    userDeleted: 'Registro excluído com sucesso',
    productCreated: 'Cadastro realizado com sucesso',
    productDeleted: 'Registro excluído com sucesso',
    loginInvalid: 'Email e/ou senha inválidos',
  },
  roles: {
    admin: 'true',
    user: 'false',
  },
  httpStatus: {
    ok: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    methodNotAllowed: 405,
    notFound: 404,
  },
};

module.exports = constants;

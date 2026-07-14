// Service de Usuários (API). Herda BaseService.
const BaseService = require('./BaseService');
const api = require('../config/api');

class UsersService extends BaseService {
  constructor() {
    super(api.users.base);
  }

  listar(token) {
    return this.get('', { token });
  }

  criar(user, options) {
    return this.post('', user, options);
  }

  buscar(id, options) {
    return this.get(`/${id}`, options);
  }

  excluir(id, options) {
    return this.delete(`/${id}`, options);
  }
}

module.exports = UsersService;

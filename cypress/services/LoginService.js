// Service de Autenticação (API). Herda BaseService.
const BaseService = require('./BaseService');
const api = require('../config/api');

class LoginService extends BaseService {
  constructor() {
    super(api.auth.login);
  }

  login(email, password) {
    return this.post('', { email, password });
  }
}

module.exports = LoginService;

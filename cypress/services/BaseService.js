// Classe base para todos os Services de API.
// Centraliza verbos HTTP e tratamento padrão de resposta.
const environment = require('../config/environment');

class BaseService {
  constructor(basePath) {
    this.basePath = basePath;
  }

  buildUrl(path) {
    return `${environment.apiUrl}${this.basePath}${path || ''}`;
  }

  get(path, options) {
    const token = options && options.token;
    return cy.request({
      method: 'GET',
      url: this.buildUrl(path),
      failOnStatusCode: false,
      headers: token ? { Authorization: token } : undefined,
    });
  }

  post(path, body, options) {
    const token = options && options.token;
    return cy.request({
      method: 'POST',
      url: this.buildUrl(path),
      body,
      failOnStatusCode: false,
      headers: token ? { Authorization: token } : undefined,
    });
  }

  put(path, body, options) {
    const token = options && options.token;
    return cy.request({
      method: 'PUT',
      url: this.buildUrl(path),
      body,
      failOnStatusCode: false,
      headers: token ? { Authorization: token } : undefined,
    });
  }

  delete(path, options) {
    const token = options && options.token;
    return cy.request({
      method: 'DELETE',
      url: this.buildUrl(path),
      failOnStatusCode: false,
      headers: token ? { Authorization: token } : undefined,
    });
  }
}

module.exports = BaseService;

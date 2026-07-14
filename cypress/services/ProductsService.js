// Service de Produtos (API). Herda BaseService.
const BaseService = require('./BaseService');
const api = require('../config/api');

class ProductsService extends BaseService {
  constructor() {
    super(api.products.base);
  }

  listar(token) {
    return this.get('', { token });
  }

  criar(product, options) {
    return this.post('', product, options);
  }

  buscar(id, { token } = {}) {
    return this.get(`/${id}`, { token });
  }

  excluir(id, { token }) {
    return this.delete(`/${id}`, { token });
  }
}

module.exports = ProductsService;

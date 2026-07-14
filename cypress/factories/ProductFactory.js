// Factory de produtos — gera massa única a cada execução (Faker).
const fakerUtils = require('../utils/faker');
const helpers = require('../utils/helpers');

const ProductFactory = {
  createProduct() {
    const suffix = helpers.uniqueSuffix();
    return {
      nome: `${fakerUtils.nomeProduto()} ${suffix}`,
      preco: fakerUtils.preco(),
      descricao: fakerUtils.descricaoProduto(),
      quantidade: fakerUtils.quantidade(),
    };
  },
};

module.exports = ProductFactory;

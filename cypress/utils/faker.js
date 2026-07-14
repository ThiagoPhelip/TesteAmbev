// Wrapper do Faker para geração de dados únicos e determinísticos quando necessário.
const { faker } = require('@faker-js/faker');

const fakerUtils = {
  nome() {
    return faker.person.fullName();
  },
  email() {
    return faker.internet.email().toLowerCase();
  },
  senha(minLength = 8) {
    return faker.internet.password({ length: minLength + 2 });
  },
  nomeProduto() {
    return faker.commerce.productName();
  },
  descricaoProduto() {
    return faker.commerce.productDescription();
  },
  preco() {
    return faker.number.int({ min: 10, max: 5000 });
  },
  quantidade() {
    return faker.number.int({ min: 1, max: 100 });
  },
};

module.exports = fakerUtils;

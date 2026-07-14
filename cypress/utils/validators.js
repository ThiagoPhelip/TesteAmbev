// Validação de contratos (schema) da API usando AJV.
// Substitui asserts frágeis por validação de estrutura do retorno.
const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true, strict: false });

const schemas = {
  userResponse: {
    type: 'object',
    required: ['nome', 'email', 'password', 'administrador', '_id'],
    properties: {
      nome: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
      administrador: { type: 'string' },
      _id: { type: 'string' },
    },
  },
  userCreated: {
    type: 'object',
    required: ['message', '_id'],
    properties: {
      message: { type: 'string' },
      _id: { type: 'string' },
    },
  },
  loginResponse: {
    type: 'object',
    required: ['authorization'],
    properties: {
      authorization: { type: 'string' },
      message: { type: 'string' },
    },
  },
  productResponse: {
    type: 'object',
    required: ['message', '_id'],
    properties: {
      message: { type: 'string' },
      _id: { type: 'string' },
    },
  },
  errorResponse: {
    type: 'object',
    required: ['message'],
    properties: {
      message: { type: ['string', 'object'] },
    },
  },
};

const validators = {
  validate(schemaName, data) {
    const validateFn = ajv.compile(schemas[schemaName]);
    const valid = validateFn(data);
    return { valid, errors: validateFn.errors || null };
  },
  assertValid(schemaName, data) {
    const { valid, errors } = this.validate(schemaName, data);
    if (!valid) {
      throw new Error(`Schema "${schemaName}" inválido: ${JSON.stringify(errors)}`);
    }
    return true;
  },
};

module.exports = validators;

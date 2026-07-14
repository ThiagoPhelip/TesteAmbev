// Seletores da tela de Login (frontend ServeRest).
// Usa atributos semânticos resilientes (type/name), evitando dependência
// de data-testid que pode mudar entre versões da UI.
module.exports = {
  email: 'input[type="email"]',
  senha: 'input[type="password"]',
  entrar: 'button[type="submit"]',
  alerta: '.alert',
};

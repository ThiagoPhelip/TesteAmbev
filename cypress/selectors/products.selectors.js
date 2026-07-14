// Seletores da tela de Produtos/Carrinho (frontend ServeRest).
module.exports = {
  nomeProduto: 'input[name="nome"]',
  preco: 'input[name="price"]',
  descricao: 'textarea[name="description"]',
  quantidade: 'input[name="amount"]',
  cadastrar: 'button[type="submit"]',
  adicionarCarrinho: 'button[data-testid="adicionarCarrinho"]',
  carrinhoBadge: '.carrinho-badge',
};

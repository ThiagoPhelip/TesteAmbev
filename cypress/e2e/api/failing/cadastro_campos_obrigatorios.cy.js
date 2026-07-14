import UsersApi from '../../../support/page_objects/UsersApi';

// ⚠️ TESTE PROPOSITALMENTE FALHO (DEMONSTRAÇÃO DIDÁTICA)
//
// Objetivo: mostrar que o contrato da API exige campos obrigatórios.
// Enviamos um body vazio {} e esperamos 201 — mas a API retorna 400
// (Bad Request) com mensagens de validação. A asserção falha de propósito
// para evidenciar o comportamento de validação do backend.
//
// O que isso demonstra:
//  - Validação de contratos de entrada da API
//  - Tratamento de erros de negócio (400 vs 201)
//  - Como documentar intenção de falha sem poluir o suite funcional

describe('API - Cadastro sem campos obrigatórios (FALHO PROPOSITAL)', () => {
  const usersApi = new UsersApi();

  it('deve falhar pois a API exige nome/email/password (retorna 400, não 201)', () => {
    usersApi.criarUsuario({}).then((response) => {
      // Asserção incorreta de propósito para gerar evidência:
      expect(response.status).to.eq(201); // <- API retorna 400 aqui
    });
  });
});

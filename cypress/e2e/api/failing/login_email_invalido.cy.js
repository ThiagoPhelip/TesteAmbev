import LoginApi from '../../../support/page_objects/LoginApi';

// ⚠️ TESTE PROPOSITALMENTE FALHO (DEMONSTRAÇÃO DIDÁTICA)
//
// Objetivo: evidenciar que o login com formato de e-mail inválido é
// rejeitado pela API. Enviamos "email_invalido" (sem @) e esperamos 200,
// mas a API retorna 401/400. A asserção falha de propósito para mostrar
// que sabemos validar o caso de erro corretamente.
//
// O que isso demonstra:
//  - Cobertura de cenários negativos (negative testing)
//  - Assertivas claras sobre status de erro
//  - Separação entre "teste que valida erro" e "teste que falha por engano"

describe('API - Login com e-mail inválido (FALHO PROPOSITAL)', () => {
  const loginApi = new LoginApi();

  it('deve falhar pois e-mail sem @ é rejeitado (retorna erro, não 200)', () => {
    loginApi.login('email_invalido', 'teste').then((response) => {
      // Asserção incorreta de propósito para gerar evidência de falha:
      expect(response.status).to.eq(200); // <- API retorna 400/401 aqui
    });
  });
});

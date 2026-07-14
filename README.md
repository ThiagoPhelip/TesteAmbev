# ServeRest Automation — Cypress E2E (API + Frontend)

Projeto de testes automatizados E2E utilizando **Cypress** + **JavaScript**, cobrindo o
frontend e a API da aplicação [ServeRest](https://serverest.dev/).

O projeto foi construído para demonstrar **boas práticas de automação**, **design patterns**
(Page Object / Service Objects, Custom Commands) e **evidências claras** de testes que
passam e de testes que falham de forma proposital (didática de debugging).

---

## 🎯 Objetivo

Atender ao desafio técnico com:

- 3 cenários de testes de **API** (funcionais)
- 3 cenários de testes de **frontend** (funcionais)
- Técnicas de **demonstração de conhecimento**: conjunto paralelo de testes que
  **falham propositalmente** para evidenciar debugging, status codes e asserts precisos.

---

## 🛠 Stack Utilizada

| Ferramenta    | Versão | Uso                                  |
|---------------|--------|--------------------------------------|
| Cypress       | 13.x   | Framework de automação E2E           |
| Node.js       | 18+    | Runtime / scripts                    |
| JavaScript    | ES6+   | Linguagem dos testes                 |
| Chrome        | stable | Browser para execução de frontend    |

**Aplicações alvo**

- Frontend: `https://front.serverest.dev/`
- API (Swagger): `https://serverest.dev/`

---

## 📁 Estrutura de Pastas

```
.
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   ├── valid/            # 3 cenários de API FUNCIONAIS
│   │   │   │   ├── usuarios_listar.cy.js
│   │   │   │   ├── usuarios_cadastrar.cy.js
│   │   │   │   └── login_autenticar.cy.js
│   │   │   └── failing/          # 3 cenários de API FALHAM PROPOSITALMENTE
│   │   │       ├── rotas_inexistentes.cy.js
│   │   │       ├── cadastro_campos_obrigatorios.cy.js
│   │   │       └── login_email_invalido.cy.js
│   │   └── frontend/
│   │       ├── valid/           # 3 cenários de FRONTEND FUNCIONAIS
│   │       │   ├── login_sucesso.cy.js
│   │       │   ├── login_credenciais_invalidas.cy.js
│   │       │   └── cadastro_usuario.cy.js
│   │       └── failing/         # 3 cenários de FRONTEND FALHAM PROPOSITALMENTE
│   │           ├── login_sem_senha.cy.js
│   │           ├── seletor_inexistente.cy.js
│   │           └── url_inexistente.cy.js
│   ├── fixtures/
│   │   └── usuario.json          # Massa de dados reutilizável
│   ├── support/
│   │   ├── e2e.js                # Bootstrap dos supports
│   │   ├── commands.js          # Custom Commands reutilizáveis
│   │   └── page_objects/        # Page Objects / Service Objects
│   │       ├── UsersApi.js
│   │       ├── LoginApi.js
│   │       └── LoginPage.js
│   ├── videos/                  # Evidências de execução (geradas)
│   └── screenshots/             # Evidências de falha (geradas)
├── cypress.config.js            # Configuração do Cypress 13
├── package.json                 # Scripts de execução
├── PONTOS_FORTES.md            # Documentação dos pontos fortes do projeto
└── README.md
```

---

## 🧩 Padrões de Projeto e Inovações Aplicadas

### 1. Page Object / Service Object Model
Encapsulamento de seletores e ações em classes dedicadas
(`UsersApi`, `LoginApi`, `LoginPage`), eliminando duplicação e facilitando manutenção.

### 2. Custom Commands Reutilizáveis
Em `cypress/support/commands.js`:
- `cy.gerarUsuario(admin)` — gera massa de dados **dinâmica e única** (timestamp).
- `cy.criarUsuarioViaApi(user)` — cria usuário e valida 201.
- `cy.loginViaApi(email, password)` — autentica e retorna o token.
- `cy.loginPage()` — instancia o Page Object de login.
- `cy.excluirUsuario(id)` — teardown de dados criados.

### 3. Dados Dinâmicos e Testes Independentes
Todos os testes usam `Date.now()` para e-mails/nomes únicos, evitando colisão entre
execuções. Nenhum teste depende do estado de outro.

### 4. Testes que Falham Propositalmente (Demonstração de Conhecimento)
Pasta `*/failing/` contém testes com **comentários didáticos** explicando:
- O erro esperado
- O que ele revela sobre a API/frontend
- Como separar "falha de bug" de "falha intencional documentada"

Isso evidencia domínio de:
- Status codes HTTP corretos (`201`, `400`, `401`, `405`)
- Retry/timeout do Cypress (elemento não encontrado)
- Negative testing (validação de contratos de entrada)
- Roteamento de SPA e tratamento de 404

### 5. Teardown Automático
O teste de cadastro cria o usuário em `before()` e o remove em `after()`, garantindo
**limpeza dos dados** criados (critério de qualidade do desafio).

---

## 🚀 Como Instalar

```bash
# Clone o repositório
git clone https://github.com/ThiagoPhelip/TesteAmbev.git
cd TesteAmbev

# Instale as dependências
npm install
```

---

## 🧪 Como Executar os Testes

### Todos os testes
```bash
npm test
# ou
npx cypress run
```

### Apenas testes de API
```bash
npm run test-api
```

### Apenas testes de frontend
```bash
npm run test-frontend
```

### Apenas testes FUNCIONAIS (que passam)
```bash
npm run test-valid
```

### Apenas testes que FALHAM PROPOSITALMENTE
```bash
npm run test-failing
```

### Modo interativo (Cypress UI)
```bash
npm run cypress:open
```

### Executando com Chrome (recomendado para frontend)
```bash
npx cypress run --browser chrome --headed
```

---

## 📊 Cenários de Teste

### API (funcionais — `cypress/e2e/api/valid/`)
| Arquivo | Cenário | Assertivas |
|---------|---------|------------|
| `usuarios_listar.cy.js` | GET `/usuarios` | status 200, `quantidade`, array `usuarios` |
| `usuarios_cadastrar.cy.js` | POST `/usuarios` | status 201, mensagem, `_id` (com teardown) |
| `login_autenticar.cy.js` | POST `/login` | 200 + token; 401 com senha errada |

### API (falham propositalmente — `cypress/e2e/api/failing/`)
| Arquivo | O que demonstra |
|---------|-----------------|
| `rotas_inexistentes.cy.js` | Rota real é `/usuarios`, não `/users` (405) |
| `cadastro_campos_obrigatorios.cy.js` | API exige campos → 400 (não 201) |
| `login_email_invalido.cy.js` | E-mail sem `@` é rejeitado (erro, não 200) |

### Frontend (funcionais — `cypress/e2e/frontend/valid/`)
| Arquivo | Cenário |
|---------|---------|
| `login_sucesso.cy.js` | Login válido → redireciona para home |
| `login_credenciais_invalidas.cy.js` | Senha errada → mensagem de erro visível |
| `cadastro_usuario.cy.js` | Cadastro com dados dinâmicos → home logada |

### Frontend (falham propositalmente — `cypress/e2e/frontend/failing/`)
| Arquivo | O que demonstra |
|---------|-----------------|
| `login_sem_senha.cy.js` | UI bloqueia submit sem senha (permanece em /login) |
| `seletor_inexistente.cy.js` | Timeout de elemento não encontrado |
| `url_inexistente.cy.js` | Rota inexistente → tratamento de 404 |

---

## 📸 Evidências de Execução

O Cypress gera automaticamente:
- **Vídeos** em `cypress/videos/` para cada spec executado
- **Screenshots** em `cypress/screenshots/` em caso de falha

> As evidências são produzidas a cada `cypress run`. Para reproduzi-las, basta executar
> os scripts de teste acima — os arquivos de vídeo e screenshot serão regenerados.

---

## ✅ Critérios de Avaliação Atendidos

- ✅ **Aderência ao escopo** — Cypress + JavaScript, exatamente como solicitado
- ✅ **API e Frontend** cobertos (`cy.request()` para API)
- ✅ **Organização por responsabilidade** — `api/`, `frontend/`, `fixtures/`, `commands/`, `page_objects/`
- ✅ **Testes independentes e estáveis** — dados dinâmicos, teardown automático
- ✅ **Assertivas claras** — status, mensagens, tokens, URLs, elementos visíveis
- ✅ **Boas práticas de código** — POM, Commands, factories simples, sem duplicação
- ✅ **README completo** — objetivo, stack, estrutura, instalação, execução, massa de dados
- ✅ **Scripts de execução** — `test`, `test-api`, `test-frontend`, `test-valid`, `test-failing`, `cypress:open`
- ✅ **Qualidade de entrega** — dados dinâmicos, limpeza de dados, commits claros, sem `node_modules` no repo
- ✅ **Demonstração de conhecimento** — conjunto explícito de testes que falham propositalmente, documentados

---

## 📌 Observações sobre Massa de Dados

- Usuário padrão da API para login válido: `fulano@qa.com` / `teste`
- Testes que criam dados usam timestamps (`Date.now()`) para garantir unicidade
- O cadastro de usuário via API é **removido no `after()`**, deixando o ambiente limpo
- Nenhuma credencial sensível é versionada

---

Desenvolvido como parte de um desafio técnico para vaga de QA Automation Engineer.
Veja também [`PONTOS_FORTES.md`](./PONTOS_FORTES.md) para a documentação detalhada dos
pontos fortes do projeto.

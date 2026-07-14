# ServeRest Cypress Automation

Automação de testes E2E (API + Frontend) para o [ServeRest](https://serverest.dev/) usando
**Cypress** + **JavaScript**, arquitetada segundo boas práticas de equipes de QA Automation
(Google, Microsoft, Nubank, Mercado Livre, Shopify, Booking).

---

## 🎯 Objetivo

Atender ao desafio técnico com foco em **arquitetura limpa, reutilização, escalabilidade e
manutenibilidade**, cobrindo:

- Testes de **API** (positivos e negativos)
- Testes de **Frontend** (positivos e negativos)
- Padrões de projeto (Page Object, Service Object, Factory, Base classes)
- Validação de contrato (schema) de API
- CI/CD com GitHub Actions

---

## 🏗 Arquitetura

```
cypress/
├── config/              # Configuração centralizada (api, environment)
├── utils/               # Helpers (faker, helpers, constants, routes, validators)
├── selectors/           # Seletores centralizados por tela
├── factories/           # Massa de dados dinâmica (Faker)
├── services/            # API Services (herdam BaseService)
├── pages/               # UI Page Objects (herdam BasePage)
├── commands/            # Custom Commands por domínio
├── e2e/
│   ├── api/             # login.cy.js, users.cy.js, products.cy.js
│   └── frontend/        # login.cy.js, users.cy.js, cart.cy.js
├── fixtures/            # Dados estáticos (quando necessário)
├── reports/             # Relatórios (mochawesome, junit) — gerados
├── screenshots/         # Evidências de falha — geradas
└── videos/              # Vídeos de execução — gerados
```

### Princípios aplicados
- **SOLID / Single Responsibility**: cada classe tem uma responsabilidade (Pages = UI, Services = API)
- **DRY**: BasePage/BaseService concentram comportamentos comuns
- **KISS**: métodos pequenos e semânticos
- **Clean Code**: nomes claros, sem duplicação, sem hardcoded
- **Dados dinâmicos**: Faker + cleanup automático (`after`/`afterEach`)

---

## 🛠 Tecnologias

| Ferramenta | Versão | Uso |
|------------|--------|-----|
| Cypress | 13.x | Framework E2E |
| Node.js | 18+ | Runtime (CI: 20 e 22) |
| @faker-js/faker | 8.x | Geração de massa |
| ajv | 8.x | Validação de schema |
| ESLint | 8.x | Lint |
| Prettier | 3.x | Formatação |
| mochawesome | 7.x | Relatórios HTML/JSON |
| dotenv | 16.x | Variáveis de ambiente |

---

## 📦 Estrutura de Pastas (detalhe)

| Pasta | Conteúdo |
|-------|----------|
| `config/api.js` | Endpoints da API |
| `config/environment.js` | URLs e timeouts por ambiente |
| `utils/faker.js` | Wrapper do Faker |
| `utils/helpers.js` | Funções utilitárias puras |
| `utils/constants.js` | Mensagens, roles, HTTP status |
| `utils/routes.js` | Rotas de frontend |
| `utils/validators.js` | Validação de schema (AJV) |
| `selectors/*.js` | Seletores por tela |
| `factories/*.js` | UserFactory, ProductFactory |
| `services/*.js` | LoginService, UsersService, ProductsService |
| `pages/*.js` | LoginPage, HomePage, UsersPage |
| `commands/*.js` | login, user, product, api |

---

## 🚀 Como Instalar

```bash
git clone https://github.com/ThiagoPhelip/TesteAmbev.git
cd TesteAmbev
npm install
cp .env.example .env   # ajuste se necessário
```

---

## 🧪 Como Executar

```bash
npm test              # todos os testes (headless)
npm run api           # apenas API
npm run frontend      # apenas Frontend
npm run open          # Cypress em modo interativo
npm run lint          # ESLint
npm run lint:fix      # ESLint com autofix
npm run format        # Prettier (write)
npm run report        # execução com relatório mochawesome
```

> **Frontend no CI:** o frontend (`front.serverest.dev`) utiliza proteção de bot que
> bloqueia navegadores headless em ambientes de CI. Por isso, o job de frontend no
> pipeline é marcado como `continue-on-error` (documentado). Os testes de API formam o
> gate principal e executam em Node 20 e 22.

---

## 📊 Massa de Dados

- Usuário válido padrão (`.env`): `fulano@qa.com` / `teste`
- Factories geram dados **únicos a cada execução** (Faker + timestamp)
- Todo dado criado via API é **removido automaticamente** no final do teste (teardown)
- Nenhuma credencial sensível é versionada (`.env` está no `.gitignore`)

---

## 📈 Relatórios

- **Mochawesome**: HTML + JSON em `cypress/reports/mochawesome`
- **Screenshots/Vídeos**: gerados em caso de falha (ou sempre, conforme config)
- **JUnit XML**: disponível para integração com outras ferramentas de CI

Gerar relatório:
```bash
npm run report
```

---

## ⚙️ CI/CD

Pipeline em `.github/workflows/cypress.yml`:
- `checkout` → `setup-node` (matrix 20/22) → `npm ci` → `lint` → `cypress run`
- Upload de relatórios, screenshots e vídeos como artifacts
- Job de frontend documentado (tolerante a bloqueio de bot)

---

## 🧠 Decisões Arquiteturais

1. **Separação Pages × Services** — UI e API nunca se misturam
2. **Base classes** — evitam duplicação de ações comuns
3. **Factories + Faker** — eliminam massa fixa e colisões
4. **Selectors centralizados** — mudança de UI em um único lugar
5. **Validação de schema (AJV)** — contratos de API verificados
6. **Sem esperas fixas** — retry nativo e assertions inteligentes
7. **Cleanup automático** — ambiente limpo entre execuções
8. **Commands por domínio** — organização e reuso
9. **Variáveis de ambiente** — configuração externa, sem hardcoded

---

## ✅ Critérios Atendidos

- ✅ Aderência ao escopo (Cypress + JS)
- ✅ API e Frontend cobertos
- ✅ Organização por responsabilidade
- ✅ Testes independentes e estáveis (dados dinâmicos)
- ✅ Assertivas semânticas e validação de schema
- ✅ POM, Service Objects, Factories, Base classes
- ✅ ESLint + Prettier
- ✅ Relatórios (Mochawesome)
- ✅ GitHub Actions (matrix Node 20/22)
- ✅ Commits incrementais e claros
- ✅ Sem `node_modules`, `.env` ou artefatos no repositório

Veja também [`PONTOS_FORTES.md`](./PONTOS_FORTES.md).

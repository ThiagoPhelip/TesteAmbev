# 🌟 Pontos Fortes do Projeto (Arquitetura Enterprise)

Documento que descreve exatamente os pontos fortes da automação Cypress para o ServeRest,
seguindo padrões de equipes de QA Automation.

---

## 1. Arquitetura em Camadas (Separation of Concerns)

Clara divisão por responsabilidade:
- `pages/` — apenas UI (Page Objects)
- `services/` — apenas API (Service Objects)
- `factories/` — geração de massa
- `selectors/` — seletores centralizados
- `utils/` — helpers, constants, validators, faker
- `config/` — URLs, endpoints, timeouts
- `commands/` — custom commands por domínio

## 2. Design Patterns Aplicados

- **Page Object Model (POM)** — `LoginPage`, `HomePage`, `UsersPage`
- **Service Object** — `LoginService`, `UsersService`, `ProductsService`
- **Factory** — `UserFactory`, `ProductFactory` (Faker)
- **Template Method** — `BasePage` / `BaseService` com métodos reutilizáveis
- **Centralização** — `selectors/`, `config/`, `constants.js`

## 3. SOLID / Clean Code

- **Single Responsibility**: cada classe uma função
- **DRY**: lógica comum em base classes
- **KISS**: métodos pequenos e semânticos
- **Sem hardcoded**: nada de URLs, e-mails, senhas ou timeouts espalhados

## 4. Dados Dinâmicos e Independentes

- Faker gera e-mail/nome/senha/produto únicos por execução
- Timestamp evita colisão entre runs
- Cleanup automático (`after`) remove dados criados

## 5. Validação de Contrato (Schema)

- `utils/validators.js` com **AJV** valida estrutura de respostas
- Garante que breaking changes na API sejam detectados

## 6. Assertivas Semânticas e Robustas

- Status HTTP esperados por constante (`constants.httpStatus`)
- Validação de body, mensagens, tokens, URLs e persistência
- Negative testing explícito (401, 400, 404)

## 7. Sem Esperas Fixas

- `cy.wait(2000)` eliminado
- Uso de retry nativo e assertions inteligentes
- `failOnStatusCode: false` + asserts explícitos

## 8. Estrutura de Testes Profissional

- Cenários positivos e negativos no mesmo arquivo via `describe`/`context`
- Organização por domínio (`api/login.cy.js`, `frontend/login.cy.js`)
- Nomenclatura clara e descritiva

## 9. Qualidade de Código e Tooling

- **ESLint** configurado (`eslint:recommended` + plugin Cypress)
- **Prettier** padronizando formatação
- **Mochawesome** para relatórios HTML/JSON
- Scripts de lint, format, report

## 10. CI/CD (GitHub Actions)

- Matrix Node 20 e 22
- Lint + Cypress + upload de artifacts (reports, screenshots, vídeos)
- Job de frontend documentado (`continue-on-error`)

## 11. Variáveis de Ambiente

- `.env` + `.env.example`
- `BASE_URL`, `API_URL`, `EMAIL`, `PASSWORD` externos ao código
- `.env` no `.gitignore` (sem segredos no repo)

## 12. Diferenciais de QA Sênior

- Autenticação via API para preparar cenários de frontend (menos tempo)
- `cy.session()` para reutilizar sessões autenticadas
- Retry seletivo (nunca indiscriminado)
- Factory + cleanup automático
- Relatórios HTML + JUnit XML
- Pipeline multi-versão de Node

## 13. Commits Incrementais

- Refatoração dividida em etapas claras
- Mensagens descritivas por responsabilidade

---

## 📌 Conclusão

Projeto **enterprise-grade**: escalável, manutenível, aderente a boas práticas globais e
pronto para produção. Cumpre todos os requisitos do desafio com arquitetura limpa.

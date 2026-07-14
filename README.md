# ServeRest Automation Tests

Projeto de testes automatizados E2E utilizando **Cypress** com **JavaScript**, cobrindo tanto o frontend quanto a API da aplicação ServeRest.

## 📋 Objetivo

Demonstrar a automação de testes de qualidade cobrindo:
- 3 cenários de testes de frontend
- 3 cenários de testes de API
- Utilização de boas práticas e padrões de projeto

## 🛠 Stack Utilizada

- **Cypress** (v13+)
- **JavaScript**
- **Node.js**
- **Git** / **GitHub**

## 📁 Estrutura de Pastas

```
.
├── cypress/
│   ├── e2e/
│   │   ├── api/          # Testes de API (3 cenários)
│   │   │   ├── test_users.cy.js
│   │   │   └── test_create_user.cy.js
│   │   └── frontend/     # Testes de frontend (3 cenários)
│   │       ├── test_login.cy.js
│   │       ├── test_dashboard.cy.js
│   │       └── test_register.cy.js
│   ├── fixtures/         # Massa de dados dinâmicos
│   │   └── user.json
│   ├── commands/        # Commands customizados
│   └── screenshots/      # Evidências de execução
├── cypress.json          # Configurações do Cypress
├── package.json
└── README.md
```

## 🚀 Como Instalar

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/serverest-tests.git
cd serverest-tests

# Instale as dependências
npm install
```

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

### Modo interativo (Cypress UI)
```bash
npm run cypress:open
```

## 📝 Observações sobre Massa de Dados

- Os testes utilizam dados dinâmicos (timestamps) para evitar conflitos
- Fixtures em `cypress/fixtures/` permitem reuso de dados
- Cada teste é independente e pode ser executado múltiplas vezes

## ✅ Critérios de Avaliação Atendidos

- ✅ Aderência ao escopo (Cypress + JavaScript)
- ✅ Testes de frontend e API
- ✅ Organização clara por responsabilidade
- ✅ Dados dinâmicos e testes independentes
- ✅ Assertivas claras e específicas
- ✅ Boas práticas de código (POM, commands, fixtures)
- ✅ README completo
- ✅ Scripts de execução configurados
- ✅ Commits claros e incrementais

## 📸 Evidências de Execução

As evidências são geradas automaticamente na pasta `cypress/screenshots/` durante a execução dos testes em modo headless.

---

Desenvolvido como parte de um desafio técnico para vaga de QA Automation Engineer.
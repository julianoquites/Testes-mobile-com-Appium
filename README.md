# Testes Mobile Android com Appium

Este repositório contém uma suíte de testes automatizados para o aplicativo EBAC Store, utilizando **Appium** e **WebdriverIO**. O projeto tem como foco validar fluxos essenciais, como autenticação, navegação e gerenciamento de perfil, garantindo a qualidade e estabilidade da aplicação.

---

## 🚀 Funcionalidades

- **Framework de Testes Automatizados**: Baseado em WebdriverIO para suporte robusto e escalável.
- **Relatórios com Allure**: Integração com Allure Reports para relatórios detalhados e interativos.
- **Execução na Nuvem**: Configurado para rodar em dispositivos Android na plataforma Sauce Labs.
- **Geração de Dados Dinâmicos**: Uso da biblioteca `@faker-js/faker` para geração de dados aleatórios.
- **Estrutura Modular**: Arquitetura baseada em Page Object Models (POM) para fácil manutenção.

---

## 🛠️ Configuração e Instalação

### Pré-requisitos

- **Node.js** (v16+ recomendado)
- **Appium** (instalado globalmente): `npm install -g appium`
- **Conta no Sauce Labs** (para execução remota)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/julianoquites/ebac-store-mobile-tests.git
   cd ebac-store-mobile-tests
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor Appium (se necessário para execução local):
   ```bash
   appium
   ```

---

## 🧪 Execução dos Testes

Para rodar os testes, utilize o comando:

```bash
npm run test
```

### Exemplo de Teste

```javascript
describe("Minha aplicação de Login", () => {
  it("deve realizar login com credenciais válidas", async () => {
    await homePage.openMenu("profile");

    await signupPage.signup(
      "John",
      "Doe",
      "11999999999",
      faker.internet.email(),
      "senha123",
      "senha123"
    );
    await homePage.openAllProducts();
    await homePage.backFunction();
    await homePage.openMenu("profile");
    expect(
      (await profilePage.profileName("Doe John")).isDisplayed()
    ).toBeTruthy();

    await driver.pause(10000);
  });
});
```

---

## 📊 Relatórios

Os relatórios são gerados automaticamente utilizando **Allure Reports**. Para visualizar os relatórios, execute:

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## 🌐 Execução na Nuvem

Este projeto está configurado para rodar no **Sauce Labs**, permitindo testes em dispositivos reais e emulados. O arquivo `wdio.conf.js` inclui as seguintes configurações principais:

- **Plataforma**: Android 10
- **Driver**: UiAutomator2
- **Serviço**: Sauce Labs
- **Build**: `appium-build-EBAC-MODULO-17`
- **Relatórios Automáticos**: Screenshots capturados após cada teste para análise detalhada.

---

## 📚 Estrutura do Projeto

```
ebac-store-mobile-tests/
├── specs/                 # Especificações dos testes
│   └── signup.test.js     # Teste de exemplo para cadastro
├── pageobjects/           # Modelos de Objetos de Página
│   ├── home.page.js
│   ├── login.page.js
│   ├── profile.page.js
│   └── signup.page.js
├── wdio.conf.js           # Configurações do WebdriverIO
├── package.json           # Dependências e scripts do Node.js
└── README.md              # Documentação do projeto
```

---

## 📝 Autor

Desenvolvido por **Juliano Quites** como parte de projetos contínuos para garantir soluções de software de alta qualidade.  
Entre em contato: [juliano.quites@gmail.com](mailto:juliano.quites@gmail.com).

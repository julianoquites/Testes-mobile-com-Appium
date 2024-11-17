import { driver } from "@wdio/globals";
import { faker } from "@faker-js/faker";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import profilePage from "../pageobjects/profile.page.js";
import signupPage from "../pageobjects/signup.page.js";
import productPage from "../pageobjects/product.page.js";

describe("My Login application", () => {
  beforeEach(async () => {
    // Garante um estado inicial limpo
    await driver.reset();
  });

  it("should login with valid credentials", async () => {
    try {
      await homePage.openMenu("Account");

      await signupPage.signup(
        "John",
        "Doe",
        "11999999999",
        faker.internet.email(),
        "senha123",
        "senha123"
      );

      // Adicione waits explícitos quando necessário
      await driver.waitUntil(
        async () => await homePage.isMenuAvailable("Browse"),
        { timeout: 10000, timeoutMsg: "Menu Browse não ficou disponível" }
      );

      await homePage.openMenu("Browse");
      await homePage.openProduct();
      await productPage.addToCart();

      // Capture screenshot ao final do teste bem-sucedido
      await driver.saveScreenshot("./screenshots/test-passed.png");
    } catch (error) {
      // Capture screenshot em caso de erro
      await driver.saveScreenshot("./screenshots/test-failed.png");
      throw error;
    }
  });
});

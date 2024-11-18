
import { faker } from "@faker-js/faker";
import homePage from "../pageobjects/home.page.js";
import signupPage from "../pageobjects/signup.page.js";
import productPage from "../pageobjects/product.page.js";

describe("User Registration Flow", () => {
  let testExecuted = false;

  beforeEach(async function () {
    if (testExecuted) {
      this.skip();
    }
    await browser.reset();
  });

  it("should complete registration and add product to cart", async () => {
    testExecuted = true;

    try {
      await homePage.openMenu("Account");
      await browser.pause(1000);

      const testEmail = faker.internet.email();
      await signupPage.signup(
        "John",
        "Doe",
        "11999999999",
        testEmail,
        "senha123",
        "senha123"
      );

      // Validação do signup
      expect(await signupPage.isSignupSuccessful()).toBe(true);

      await homePage.openMenu("Browse");
      await homePage.openProduct();
      await productPage.addToCart();

      // Validações adicionais se necessário
    } catch (error) {
      console.error("Erro no teste:", error);
      throw error;
    }
  });

  afterEach(async () => {
    if (browser.sessionId) {
      await browser.deleteSession();
    }
  });
});

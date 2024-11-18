import { $, browser } from "@wdio/globals";

class SignupPage {
  // Elementos com getters
  get elements() {
    return {
      btnSignup: $("id:signUp"),
      firstName: $("id:firstName"),
      lastName: $("id:lastName"),
      phoneNumber: $("id:phone"),
      email: $("id:email"),
      password: $("id:password"),
      repassword: $("id:repassword"),
      btnCreate: $("id:create"),
    };
  }

  // Método principal com tratamento de erros e esperas
  async signup(firstName, lastName, phoneNumber, email, password, repassword) {
    try {
      const els = this.elements;

      await els.btnSignup.waitForDisplayed({ timeout: 10000 });
      await els.btnSignup.click();
      await browser.pause(500);

      // Função helper para input
      const setInput = async (element, value) => {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.waitForClickable({ timeout: 5000 });
        await element.click();
        await element.clearValue();
        await element.setValue(value);
        await browser.pause(300); // Pequena pausa entre inputs
      };

      // Preenchimento dos campos com validação
      await setInput(els.firstName, firstName);
      await setInput(els.lastName, lastName);
      await setInput(els.phoneNumber, phoneNumber);
      await setInput(els.email, email);
      await setInput(els.password, password);
      await setInput(els.repassword, repassword);

      await els.btnCreate.waitForClickable({ timeout: 10000 });
      await els.btnCreate.click();
      await browser.pause(1000); // Aguarda processamento do signup
    } catch (error) {
      console.error("Erro durante o signup:", error);
      throw error;
    }
  }

  async isSignupSuccessful() {
    return !(await this.elements.btnSignup.isDisplayed());
  }
}

export default new SignupPage();

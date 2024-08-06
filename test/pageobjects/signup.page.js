import { $, browser } from "@wdio/globals";

class SignupPage {
  get btnSignup() {
    return $("~Sign up");
  }

  get firstName() {
    return $("id:firstName");
  }

  get lastName() {
    return $("id:lastName");
  }

  get phoneNumber() {
    return $("id:phone");
  }

  get email() {
    return $("id:email");
  }

  get password() {
    return $("id:password");
  }

  get repassword() {
    return $("id:repassword");
  }

  get btnCreate() {
    return $("id:create");
  }

  async signup(firstName, lastName, phoneNumber, email, password, repassword) {
    await this.btnSignup.click();
    const scrollableElement = await $("//android.widget.ScrollView"); // ou outro elemento que você deseja rolar
    await browser
      .action("pointer")
      .move({ origin: scrollableElement }) // Inicie o movimento a partir do elemento
      .down() // Pressione o botão (start scrolling)
      .move({ x: 0, y: -1000 }) // Mova para baixo (ajuste a distância conforme necessário)
      .up() // Solte o botão (stop scrolling)
      .perform();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.phoneNumber.setValue(phoneNumber);
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.repassword.setValue(repassword);
    await this.btnCreate.click();
  }
}

export default new SignupPage();

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
    const scrollableElement = await $("//android.widget.ScrollView");
    await browser
      .action("pointer")
      .move({ origin: scrollableElement })
      .down() 
      .move({ x: 0, y: -1000 }) 
      .up()
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

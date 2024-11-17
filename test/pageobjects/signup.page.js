import { $ } from "@wdio/globals";

class SignupPage {
  get btnSignup() {
    return $("id:signUp");
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

    await this.firstName.click();
    await this.firstName.setValue(firstName);

    await this.lastName.click();
    await this.lastName.setValue(lastName);

    await this.phoneNumber.click();
    await this.phoneNumber.setValue(phoneNumber);

    await this.email.click();
    await this.email.setValue(email);

    await this.password.click();
    await this.password.setValue(password);

    await this.repassword.click();
    await this.repassword.setValue(repassword);

    await this.btnCreate.click();
  }
}

export default new SignupPage();

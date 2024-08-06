import { $ } from "@wdio/globals";

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
     return $('android=new UiSelector().resourceId("repassword")');
  }

  get btnCreate() {
    return $('android=new UiSelector().resourceId("create")');
  }

  async signup(firstName, lastName, phoneNumber, email, password, repassword) {
    await this.btnSignup.click();
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.phoneNumber.setValue(phoneNumber);
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.password.setValue(repassword);
    await this.btnCreate.click();
  }
}

export default new SignupPage();

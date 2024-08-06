import { expect, driver } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import loginPage from "../pageobjects/login.page.js";
import profilePage from "../pageobjects/profile.page.js";
import signupPage from "../pageobjects/signup.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await homePage.openMenu("profile");

    await signupPage.signup(
      "John",
      "Doe",
      "11999999999",
      "john.doe@gmail.com",
      "senha123",
      "senha123"
    )

    // await loginPage.login("juliano.quites@gmail.com", "kabazz");
    // await homePage.openMenu("profile");
    // expect((await profilePage.profileName("Quites Juliano")).isDisplayed()).toBeTruthy();
    await driver.pause(10000);
  });
});

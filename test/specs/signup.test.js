import { expect, driver, browser } from "@wdio/globals";
import { faker } from "@faker-js/faker";
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

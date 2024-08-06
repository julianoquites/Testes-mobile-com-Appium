import { expect, driver } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import signupPage from "../pageobjects/signup.page.js";

describe("My Signup page", () => {
  it("should create a new valid user", async () => {
    await homePage.openMenu("profile");

    await signupPage.signup(
      "John",
      "Doe",
      "11999999999",
      "john.doe@gmail.com",
      "senha123",
      "senha123"
    );
    await driver.pause(10000);
  });
});

import { $, browser } from "@wdio/globals";

class ProfilePage {
  async profileName(name) {
    const selector = browser.isIOS
      ? `**/XCUIElementTypeStaticText[name == "${name}"]`
      : `//android.widget.TextView[@text="${name}"]`;

    const element = $(selector);
    await element.waitForDisplayed({ timeout: 10000 });
    return element;
  }

  async isProfileLoaded() {
    return await $("id:profileContainer").isDisplayed();
  }
}

export default new ProfilePage();

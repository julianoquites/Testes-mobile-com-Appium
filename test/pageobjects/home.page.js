// home.page.js
import { $, browser } from "@wdio/globals";

class HomePage {
  // Elementos
  get menuTabs() {
    const base = "id:tab-";
    return {
      account: $(`${base}Account`),
      browse: $(`${base}Browse`),
      profile: $(`${base}profile`),
    };
  }

  get productItem() {
    return browser.isIOS
      ? $(
          `**/XCUIElementTypeOther[name == "productDetails" and label == "Handmade Leather Donddi sandals For Women R$ 83 R$ 90"]`
        )
      : $("id:see-all-new");
  }

  // Métodos
  async openMenu(menu) {
    await this.menuTabs[menu.toLowerCase()].waitForDisplayed({
      timeout: 10000,
    });
    await this.menuTabs[menu.toLowerCase()].click();
    await browser.pause(1000); // Aguarda a transição
  }

  async openProduct() {
    await this.productItem.waitForDisplayed({ timeout: 10000 });
    await this.productItem.waitForClickable({ timeout: 5000 });
    await this.productItem.click();
    await browser.pause(1000); // Aguarda a transição
  }

  async backFunction() {
    await browser.back();
    await browser.pause(1000); // Aguarda a transição
  }

  async isPageLoaded() {
    return await this.menuTabs.browse.isDisplayed();
  }
}

export default new HomePage();

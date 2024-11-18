import { $, browser } from "@wdio/globals";

class ProductPage {
  get addToCartButton() {
    return browser.isIOS
      ? $(`**/XCUIElementTypeOther[name == "addToCart"]`)
      : $("id:addToCart");
  }

  async addToCart() {
    await this.addToCartButton.waitForDisplayed({ timeout: 10000 });
    await this.addToCartButton.waitForClickable({ timeout: 5000 });
    await this.addToCartButton.click();
    await browser.pause(1000); // Aguarda processamento
  }
}

export default new ProductPage();

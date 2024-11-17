import { $, browser } from "@wdio/globals";

class HomePage {
  async openMenu(menu) {
    await $(`id:tab-${menu}`).click();
  }
  async openProduct() {
    if (browser.isIOS) {
      await $(
        `**/XCUIElementTypeOther[name == "productDetails" and label == "Handmade Leather Donddi sandals For Women R$ 83 R$ 90"]`
      ).click();
    } else {
      await $(`id:see-all-new`).click();
    }
  }

  async backFunction() {
    await browser.back();
  }
}

export default new HomePage();

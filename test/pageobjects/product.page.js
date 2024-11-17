import { $, browser } from "@wdio/globals";

class ProductPage {
  async openMenu(menu) {
    await $(`id:tab-${menu}`).click();
  }
  async addToCart() {
    if (browser.isIOS) {
      // Usando XPath com predicado para o botão "Adicionar ao Carrinho" no iOS
      await $(`**/XCUIElementTypeOther[name == "addToCart"]`).click();
    } else {
      // ID para Android
      await $(`id:addToCart`).click();
    }
  }

  async backFunction() {
    await browser.back();
  }
}

export default new ProductPage();

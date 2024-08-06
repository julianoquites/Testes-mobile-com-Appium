import { $ } from "@wdio/globals";

class HomePage {
  async openMenu(menu) {
    await $(`id:tab-${menu}`).click();
  }
  async openAllProducts() {
    await $(`id:see-all-new`).click();
  }
  async backFunction() {
    await browser.back();
  }
}

export default new HomePage();

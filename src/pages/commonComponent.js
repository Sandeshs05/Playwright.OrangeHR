class commonComponent {
  constructor(page) {
    this.pageTitle = page.locator(".oxd-topbar-header-title");
    this.profileIcon = page.locator("span[class='oxd-userdropdown-tab']");
    this.menuItems = page.locator(".oxd-main-menu-item-wrapper").allTextContents();
  }

  async getHeaderName() {
    return await this.pageTitle.innerText();
  }

  async selectMenuItem(menuItem) {
    console.log(await this.menuItems);
    for (let i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i] === "PIM") {
        await page.locator(".oxd-main-menu-item-wrapper").nth(i).click();
        break;
      }
    }
  }
}

export default commonComponent;

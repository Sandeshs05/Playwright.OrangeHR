class commonComponent {
  constructor(page) {
    this.pageTitle = page.locator(".oxd-topbar-header-title");
  }

  async getHeaderName() {
    return await this.pageTitle.innerText();
  }
}

export default commonComponent;

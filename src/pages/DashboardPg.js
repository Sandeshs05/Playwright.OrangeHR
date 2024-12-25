class DashboardPg {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator(".oxd-topbar-header-title");
  }

  async getHeaderName() {
    return await this.pageTitle.innerText();
  }
}

export default DashboardPg;

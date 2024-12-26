class PIMPage {
  constructor(page) {
    this.page = page;
    this.addEmployeeBtn = page.locator("//a[normalize-space()='Add Employee']");
    this.employeeListBtn = page.locator("//a[.='Employee List']");
    this.employeeFirstName = page.locator(".orangehrm-firstname");
    this.employeeLastName = page.locator(".orangehrm-lastname");
    this.employeeId = page.locator("form").getByRole("textbox").nth(4);
    this.saveBtn = page.locator("button[type='submit']");
  }

  async addEmployee() {
    await this.addEmployeeBtn.click();
    await this.employeeFirstName.fill("Test");
    await this.employeeLastName.fill(Math.random().toString(36).substring(2, 7));
    await this.employeeId.fill(Math.floor(Math.random() * 10000));
    await this.saveBtn.click();
  }
}

export default PIMPage;

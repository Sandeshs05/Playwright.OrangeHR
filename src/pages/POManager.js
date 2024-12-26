import LoginPg from "./LoginPg";
import DashboardPg from "./DashboardPg";
import commonComponent from "./commonComponent";
import { get } from "http";
import pimPage from "./PIMPage";
class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPg(page);
    this.dashboardPage = new DashboardPg(page);
    this.commonComponent = new commonComponent(page);
    this.pimPage = new pimPage(page);
  }

  async openApp() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }
  getLoginPage() {
    return this.loginPage;
  }
  getDashboardPage() {
    return this.dashboardPage;
  }

  getCommonComponents() {
    return this.commonComponent;
  }
  getPIMPage() {
    return this.pimPage;
  }
}
export default POManager;

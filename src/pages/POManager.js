import LoginPg from "./LoginPg";
import DashboardPg from "./DashboardPg";
import commonComponent from "./commonComponent";
import { get } from "http";

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPg(page);
    this.dashboardPage = new DashboardPg(page);
    this.commonComponent = new commonComponent(page);
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
}
export default POManager;

import { log } from "console";
import loginData from "../data/loginData.json";
class LoginPg {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.locator("input[placeholder='Username']");
    this.passwordInput = page.locator("input[placeholder='Password']");
    this.loginButton = page.locator("button[type='submit']");
    this.loginErrorMsg = page.locator(".oxd-alert.oxd-alert--error");
  }
  async openApp() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }
  async validLogin(data) {
    await this.userNameInput.fill(data.username);
    await this.passwordInput.fill(data.password);
    await this.loginButton.click();
  }
  async invalidLogin(userName, passWord) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(passWord);
    await this.loginButton.click();
    await this.page.waitForLoadState("networkidle");
    return await this.loginErrorMsg.textContent();
  }
}

export default LoginPg;

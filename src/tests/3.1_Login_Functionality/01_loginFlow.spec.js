import { test, expect } from "@playwright/test";
import POManager from "../../pages/POManager";
import loginData from "../../data/loginData.json";
import loginDataWithUsertype from "../../data/loginDatawithUsertype.json";
import { basetest } from "../../utils/base.test";
import { log } from "console";

test.describe.configure({ mode: "parallel" });
test(`Login_TC_001 Validate the login functionality with valid credentials`, async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.openApp();
  console.log(loginData);
  await poManager.getLoginPage().validLogin(loginData);
  expect(await poManager.getCommonComponents().getHeaderName()).toBe("Dashboard");
});

test("Login_TC_002 Validate the login functionality with invalid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.openApp();
  const errorMessage = await poManager.getLoginPage().invalidLogin("Admin", "admin1234");
  console.log(errorMessage);
  expect(errorMessage).toBe("Invalid credentials");
});

//Data using the fixtures in the test
// basetest("Validate the login functionality with valid credentials", async ({ page, testDataForLogin }) => {
//   const poManager = new POManager(page);
//   await poManager.getLoginPage().openApp();
//   console.log(testDataForLogin);
//   await poManager.getLoginPage().validLogin(testDataForLogin);
//   expect(await poManager.getCommonComponents().getHeaderName()).toBe("Dashboard");
// });

for (const data of loginDataWithUsertype) {
  test(`Login_TC_003 Validate the login functionality with valid credentials of ${data.usertype}`, async ({ page }) => {
    const poManager = new POManager(page);
    await poManager.openApp();
    console.log(data);
    await poManager.getLoginPage().validLogin(data);
    expect(await poManager.getCommonComponents().getHeaderName()).toBe("Dashboard");
  });
}

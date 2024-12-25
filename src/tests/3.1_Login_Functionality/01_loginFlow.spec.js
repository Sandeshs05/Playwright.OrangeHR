import { test, expect } from "@playwright/test";
import POManager from "../../pages/POManager";
import loginData from "../../data/loginData.json";
import { basetest } from "../../utils/base.test";

test.describe.configure({ mode: "paralle" });
for (const data of loginData) {
  test(`TC_001 Validate the login functionality with valid credentials of ${data.usertype}`, async ({ page }) => {
    const poManager = new POManager(page);
    await poManager.getLoginPage().openApp();
    console.log(data);
    await poManager.getLoginPage().validLogin(data);
    expect(await poManager.getCommonComponents().getHeaderName()).toBe("Dashboard");
  });
}

test("Validate the login functionality with invalid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.getLoginPage().openApp();
  const errorMessage = await poManager.getLoginPage().invalidLogin("Admin", "admin1234");
  console.log(errorMessage);
  expect(errorMessage).toBe("Invalid credentials");
});

//Data using the fixtures in the test
basetest("Validate the login functionality with valid credentials of", async ({ page, testDataForLogin }) => {
  const poManager = new POManager(page);
  await poManager.getLoginPage().openApp();
  console.log(testDataForLogin);
  await poManager.getLoginPage().validLogin(testDataForLogin);
  expect(await poManager.getCommonComponents().getHeaderName()).toBe("Dashboard");
});

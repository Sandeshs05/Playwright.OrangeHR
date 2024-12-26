import { test } from "@playwright/test";
import POManager from "../../pages/POManager";
import loginData from "../../data/loginData.json";
import { expect } from "../../../playwright.config";

test("AddEmployee_TC_001 Validate the Add Employee functionality with valid data", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.openApp();
  await poManager.getLoginPage().validLogin(loginData);
  await poManager.getCommonComponents().selectMenuItem("PIM");
  expect(await poManager.getCommonComponents().getHeaderName()).toBe("PIM");

  await page.pause();
});

test("AddEmployee_TC_002 Validate the Add Employee functionality login creation", async ({ page }) => {
  const poManager = new POManager(page);
  await poManager.openApp();
  await poManager.getLoginPage().validLogin(loginData);
  await poManager.getCommonComponents().selectMenuItem("PIM");
  expect(await poManager.getCommonComponents().getHeaderName()).toBe("PIM");

  await poManager.getPIMPage().addEmployee();
  await page.pause();
});

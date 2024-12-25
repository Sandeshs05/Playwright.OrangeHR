import { test, expect } from "@playwright/test";

test("Successfull Login", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  await page.waitForLoadState("networkidle");
  console.log(await page.locator(".oxd-topbar-header-title").allTextContents());
  expect(await page.locator(".oxd-topbar-header-title").innerText()).toBe("Dashboard");
});

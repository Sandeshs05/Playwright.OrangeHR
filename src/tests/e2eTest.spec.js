import { test, expect } from "@playwright/test";

test.skip("Test Script", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  await page.waitForLoadState("networkidle");
  console.log(await page.locator(".oxd-topbar-header-title").allTextContents());
  expect(await page.locator(".oxd-topbar-header-title").innerText()).toBe("Dashboard");
});

test.only("Add Employee", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator("input[placeholder='Username']").fill("Admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  await page.waitForLoadState("networkidle");
  const menuItems = await page.locator(".oxd-main-menu-item-wrapper").allTextContents();
  console.log(menuItems);
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i] === "PIM") {
      await page.locator(".oxd-main-menu-item-wrapper").nth(i).click();
      break;
    }
  }
  await page.locator("//a[.='Add Employee']").click();
  await page.locator(".orangehrm-firstname").fill("Test");
  const randomString = Math.random().toString(36).substring(2, 7);
  await page.locator(".orangehrm-middlename").fill(randomString);
  await page.locator(".orangehrm-lastname").fill("Employee");

  await page.pause();
});

test("test", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Username").press("Tab");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
  await page.getByPlaceholder("First Name").click();
  await page.getByPlaceholder("First Name").fill("Test ");
  await page.getByPlaceholder("First Name").press("Tab");
  await page.getByPlaceholder("Middle Name").press("Tab");
  await page.getByPlaceholder("Last Name").fill("Employee");
  await page.getByPlaceholder("Last Name").press("Tab");
  await page.locator("form span").click();
  await page
    .locator("div")
    .filter({ hasText: /^Create Login Details$/ })
    .locator("span")
    .click();
  await page.getByRole("button", { name: "Save" }).click();
  await page.locator("form").getByRole("textbox").nth(4).click();
  await page.locator("form").getByRole("textbox").nth(4).fill("0377");
  await page.getByRole("button", { name: "Save" }).click();
});

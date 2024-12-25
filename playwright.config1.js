// @ts-check
const { devices } = require("@playwright/test");
const { permission } = require("process");

const config = {
  testDir: "./src/tests",
  retries: 1,
  workers: 5,

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects: [
    {
      name: "Chrome",
      use: {
        browserName: "chromium",
        headless: false,
        screenshot: "only-on-failure", //on,off, only-on-failure
        trace: "on", //on, off, retain-on-failure, on-first-retry
        // ...devices["iPhone 14"],
        ignoreHTTPSErrors: true,
        permissions: ["geolocation"],
        video: "off", //on, off, retain-on-failure, on-first-retry
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
        headless: true,
        screenshot: "only-on-failure", //on,off, only-on-failure
        trace: "on", //off,on
        // viewport: { width: 720, height: 720 },
      },
    },
    {
      name: "Safari",
      use: {
        browserName: "webkit",
        headless: false,
        screenshot: "only-on-failure", //on,off, only-on-failure
        trace: "on", //off,on
        // ...devices["Samsung Galaxy S23 Ultra"],
      },
    },
  ],
};

module.exports = config;

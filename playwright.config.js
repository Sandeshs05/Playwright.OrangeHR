// @ts-check
const { devices } = require("@playwright/test");

const config = {
  testDir: "./src/tests",
  retries: 0,

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    headless: false,
    screenshot: "only-on-failure", //on,off, only-on-failure
    trace: "on", //off,on
  },
};

module.exports = config;

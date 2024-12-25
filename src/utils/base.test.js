import base from "@playwright/test";

exports.basetest = base.test.extend({
  testDataForLogin: { usertype: "Admin", username: "Admin", password: "admin123" },
});

const selenium_driver = process.env.SELENIUM_DRIVER || 'chrome';
export const driver = require("selenium-webdriver");
export const browser = new driver.Builder().forBrowser(selenium_driver).build();

export const driver = require("selenium-webdriver");
export const browser = new driver.Builder().withCapabilities(driver.Capabilities.firefox()).build();

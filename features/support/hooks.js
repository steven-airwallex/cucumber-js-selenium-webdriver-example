const sanitize = require('sanitize-filename');
const lowerCase = require('lower-case');

export default function() {

  this.After((scenario) => {
    if (scenario.isFailed()) {
      this.screenshot.create(sanitize(lowerCase(scenario.getName()) + ".png").replace(/ /g, "_"));
    }
    this.browser.manage().deleteAllCookies();
  });

  this.registerHandler("AfterFeatures", (event) => {
    this.browser.quit();
  });

};

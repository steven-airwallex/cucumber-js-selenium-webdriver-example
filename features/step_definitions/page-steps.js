const expect = require('chai').expect;

module.exports = function() {
  this.World = require('../support/world');

  this.Given(/^I have navigated to the (.+) page$/, (pageName) => {
    this.page = this.pageFactory.create(pageName);
    return this.page.loadAndWaitUntilVisible();
  });

};

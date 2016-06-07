const expect = require('chai').expect;

module.exports = function() {
  this.World = require('../support/world');

  this.When(/^I search for "([^"]*)"$/, (searchQuery) => {
    return this.page.searchFor(searchQuery);
  });

  this.Then(/^I see results$/, () => {
    return this.page.numberOfResults().then((numberOfResults) => expect(numberOfResults).to.be.above(0));
  });

};

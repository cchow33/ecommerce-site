// import expect method from chai library

var expect = require('chai').expect;

// set up test suites


// Sanity check to tsee if mocha's running:
describe('Mocha', function() {
  // Test spec (unit test)
  it('should run our tests using npm', function(){
    expect(true).to.be.ok;
  })
});
'use strict';

describe('Component: Home2Component', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var Home2Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    Home2Component = $componentController('home2', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: ManageTheatreComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var ManageTheatreComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ManageTheatreComponent = $componentController('manageTheatre', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

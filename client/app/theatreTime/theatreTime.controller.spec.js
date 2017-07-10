'use strict';

describe('Component: TheatreTimeComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var TheatreTimeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TheatreTimeComponent = $componentController('theatreTime', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

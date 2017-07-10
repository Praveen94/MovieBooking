'use strict';

describe('Component: MymoviesComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var MymoviesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MymoviesComponent = $componentController('mymovies', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

'use strict';

describe('Component: PaymentsuccessComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var PaymentsuccessComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PaymentsuccessComponent = $componentController('paymentsuccess', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

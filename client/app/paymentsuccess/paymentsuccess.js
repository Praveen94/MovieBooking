'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/paymentsuccess', {
        template: '<paymentsuccess></paymentsuccess>',
        authenticate:'user'
        });
  });

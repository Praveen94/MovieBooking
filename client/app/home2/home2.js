'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home2', {
        template: '<home-2></home-2>',
        authenticate:'user'
      });
  });

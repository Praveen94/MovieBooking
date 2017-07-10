'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/manageTheatre', {
        template: '<manage-theatre></manage-theatre>',
        authenticate:'admin'
      });
  });

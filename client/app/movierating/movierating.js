'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movierating', {
        template: '<movierating></movierating>',
        authenticate:'user'

      });
  });

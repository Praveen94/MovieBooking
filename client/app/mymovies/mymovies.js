'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mymovies', {
        template: '<mymovies></mymovies>',
        authenticate:'admin'
      });
  });

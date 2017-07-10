'use strict';

angular.module('yoTemplateApp', ['yoTemplateApp.auth', 'yoTemplateApp.admin',
    'yoTemplateApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'btford.socket-io', 'validation.match','ui.filters','btorfs.multiselect'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });

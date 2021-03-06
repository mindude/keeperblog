'use strict';

/**
 * @ngdoc overview
 * @name keeperblogApp
 * @description
 * # keeperblogApp
 *
 * Main module of the application.
 */
angular
  .module('keeperblogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/blog-admin', {
        templateUrl: 'views/blog-admin.html',
        controller: 'BlogAdminCtrl',
        controllerAs: 'blogAdmin'
      })
      .when('/blog-client', {
        templateUrl: 'views/blog-client.html',
        controller: 'BlogClientCtrl',
        controllerAs: 'blogClient'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name nashaLeptaApp
 * @description
 * # nashaLeptaApp
 *
 * Main module of the application.
 */
angular
  .module('nashaLeptaApp', [
    'ngResource',
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    for (var template in appRoutes.views){
      $routeProvider
        .when(
        '/' + appRoutes.views[template].url, {
          template: '<nl-article data="'+appRoutes.views[template].url+'"></nl-article>'
        }
      );
    }
    $routeProvider
      .when('/', {
        // redirect to the notes index
        redirectTo: '/contacts'
      }).otherwise({
        redirectTo: '/'
      });
  });

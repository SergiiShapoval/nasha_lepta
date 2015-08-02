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
    'firebase',
    'ngCkeditor',
    'angularPicasa',
    'ui.bootstrap',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider) {
    for (var template in appRoutes.views){
      $routeProvider
        .when(
        '/' + appRoutes.views[template].url, {
          template: '<nl-article data="'+appRoutes.views[template].url+'" auth="auth"></nl-article>'
        }
      );
    }
    $routeProvider
      .when('/', {
        redirectTo: '/news2015'
      })
      //.when('/fillFireBase', {
      //  // redirect to the notes index
      //  template: '<h1>Should Be filled</h1>',
      //  controller : 'FillCtrl'
      //})
      .when('/contacts', {
          templateUrl: 'templates/directives/contacts.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //    key: 'your api key',
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  });

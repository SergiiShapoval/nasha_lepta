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
    'nashaLeptaApp.services',
    'nashaLeptaApp.controllers'
  ])
  .config(function ($routeProvider) {
    for (var template in appData.views)
    {
      $routeProvider.when(
        appData.views[template].url, {
          template: appData.views[template].template,
          controller: appData.views[template].controller
        }
      )
    .when('/',{
      template: '' +
      '<input type="text" ng-model="views">' +
      '<br/>  {{views}}',
      controller: 'FireViewsCtrl'
    });
    }
  });

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
      );
    }
  });

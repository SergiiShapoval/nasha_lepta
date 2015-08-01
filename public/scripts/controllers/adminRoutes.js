'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AdminRoutesCtrl
 * @description
 * # AdminRoutesCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AdminRoutesCtrl', function ($scope, $route) {
    $scope.routes = $route.routes;
  });

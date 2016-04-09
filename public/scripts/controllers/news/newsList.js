'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsListCtrl
 * @description
 * # NewsListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsListCtrl', function ($scope, FireObjects) {
    $scope.news = FireObjects.all('news')
  });

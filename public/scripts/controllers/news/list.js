'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsListCtrl
 * @description
 * # NewsListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsListCtrl', function ($scope, FireObjects, SubProjectPrefixer) {
    var noveltyModelsLocation = SubProjectPrefixer('news');
    $scope.noveltyModelsLocation=noveltyModelsLocation;
    $scope.news = FireObjects.all(noveltyModelsLocation)
  });

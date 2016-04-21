'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesListCtrl
 * @description
 * # SlidesListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesListCtrl', function ($scope, FireObjects, SubProjectPrefixer) {
    var slideModelsLocation = SubProjectPrefixer('slides');
    $scope.slideModelsLocation=slideModelsLocation;
    $scope.slides = FireObjects.all(slideModelsLocation)
  });

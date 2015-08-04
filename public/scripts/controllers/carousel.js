'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;

  });

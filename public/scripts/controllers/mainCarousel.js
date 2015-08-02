'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:MainCarouselCtrl
 * @description
 * # MainCarouselCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('MainCarouselCtrl', function ($scope) {

    $scope.isSliderShown =true;

    window.setTimeout(function() {
      $scope.isSliderShown = false;
    },
      10000
      //200
    );


  });

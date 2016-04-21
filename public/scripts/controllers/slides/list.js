'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesListCtrl
 * @description
 * # SlidesListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesListCtrl', function ($scope, FireObjects, SubProjectPrefixer, $location) {
    $scope.slides = FireObjects.all(SubProjectPrefixer($location.path(), 'slides'))
  });

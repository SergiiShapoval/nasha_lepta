'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:VideoGalleryListCtrl
 * @description
 * # VideoGalleryListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('VideoGalleryListCtrl', function ($scope, FireObjects) {
    $scope.videoGallery=FireObjects.findSingle('videoGallery');

  });

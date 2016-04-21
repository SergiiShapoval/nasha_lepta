'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AlbumslistCtrl
 * @description
 * # AlbumslistCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AlbumsListCtrl', function ($scope, FireObjects, SubProjectPrefixer) {
    var albumModelsLocation = SubProjectPrefixer('albums');
    $scope.albumModelsLocation=albumModelsLocation;
    $scope.albums = FireObjects.all(albumModelsLocation)
  });

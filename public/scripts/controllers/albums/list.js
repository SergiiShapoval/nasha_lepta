'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AlbumslistCtrl
 * @description
 * # AlbumslistCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AlbumsListCtrl', function ($scope, FireObjects) {
    $scope.albums = FireObjects.all('albums')
  });

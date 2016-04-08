'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AlbumsupdateCtrl
 * @description
 * # AlbumsupdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AlbumsUpdateCtrl', function ($scope,$routeParams, FireObjects ) {
    FireObjects.find('albums', $routeParams.id).$loaded()
      .then(function(fireAlbum) {
        $scope.album = fireAlbum;
        $scope.album.updating = null;
        $scope.album.date= new Date(fireAlbum.date);
      }, function(error) {
        $scope.errors = [error];
      });

    $scope.updateAlbum = function(album) {
      $scope.album.updating = true;
      $scope.album.status = null;

      $scope.album.date=$scope.album.date.getTime();

      $scope.album.$save()
        .then(function(fireAlbum) {
          $scope.album.date= new Date(fireAlbum.date);
          $scope.album.updating = null;
          $scope.album.status = "Saved";
        }, function(error) {
          $scope.album.date= new Date($scope.album.date);
          $scope.album.updating = null;
          $scope.album.status = "Error";
          $scope.errors = [error];
        });
    };
  });

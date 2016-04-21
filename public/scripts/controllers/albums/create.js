'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AlbumscreateCtrl
 * @description
 * # AlbumscreateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AlbumsCreateCtrl', function ($scope, FireObjects, SubProjectPrefixer, ModelCopier) {

    var albumModelsLocation = SubProjectPrefixer('albums');

    $scope.albumModelsLocation=albumModelsLocation;

    $scope.album ={
      id : "fill-me",
      title : "Заглавие альбома",
      cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date : new Date(),
      picasaLink: "https://picasaweb.google.com/data/feed/base/user/111442129617636727768/albumid/6100601476767132305"
    };

    $scope.updateAlbum = function(album) {
      $scope.errors = null;
      $scope.album.updating = true;
      $scope.album.status = null;
      //load
      FireObjects.find(albumModelsLocation, album.id).$loaded()
        .then(function(fireAlbum) {
          //resave model from form
          ModelCopier(album, fireAlbum);
          //convert date to persistent form
          fireAlbum.date = $scope.album.date.getTime();
          //saving in firebase result
          fireAlbum.$save();
          $scope.album.updating = null;
          $scope.album.status = "Saved";
        }, function(error) {
          $scope.errors = [error];
          $scope.album.updating = null;
          $scope.album.status = "Error";
        });
    };
  });

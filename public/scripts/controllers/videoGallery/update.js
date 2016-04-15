'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:VideoGalleryUpdateCtrl
 * @description
 * # VideoGalleryUpdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('VideoGalleryUpdateCtrl', function ($scope, PlaylistFetcher, YoutubeListResponseConverter, FireObjects) {
    //initial state
    $scope.videoGallery=FireObjects.findSingle('videoGallery');

    $scope.fetchYoutubeData = function() {
      $scope.errors = null;
      $scope.fetching = true;
      $scope.status = null;
      PlaylistFetcher($scope.videoGallery.playlistId).then(
        function(response){
          $scope.fetching = null;
          $scope.status = "Fetched";
          $scope.videoGallery.data = YoutubeListResponseConverter(response.data);
        },
        function(error){
          if($scope.errors){
            $scope.errors.push(error);
          }else{
            $scope.errors = [error];
          }
          $scope.fetching = null;
          $scope.status = "Error";
        }
      );
    };

    $scope.updateVideoGallery = function() {
      $scope.errors = null;
      $scope.updating = true;
      $scope.status = null;
      //load
      $scope.videoGallery.$save()
        .then(function(fireVideoGallery) {
          $scope.updating = null;
          $scope.status = "Saved";
        }, function(error) {
          $scope.updating = null;
          $scope.status = "Error";
          if($scope.errors){
            $scope.errors.push(error);
          }else{
            $scope.errors = [error];
          }
        });
    };
  });

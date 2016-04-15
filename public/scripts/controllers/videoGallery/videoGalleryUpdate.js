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
      $scope.videoGallery.fetching = true;
      $scope.videoGallery.status = null;
      PlaylistFetcher($scope.videoGallery.playlistId).then(
        function(response){
          $scope.videoGallery.fetching = null;
          $scope.videoGallery.status = "Fetched";
          $scope.videoGallery.data = YoutubeListResponseConverter(response.data);
        },
        function(error){
          if($scope.errors){
            $scope.errors.push(error);
          }else{
            $scope.errors = [error];
          }
          $scope.videoGallery.fetching = null;
          $scope.videoGallery.status = "Error";
        }
      );
    };

    $scope.updateVideoGallery = function() {
      $scope.errors = null;
      $scope.videoGallery.updating = true;
      $scope.videoGallery.status = null;
      //load
      $scope.videoGallery.$save()
        .then(function(fireVideoGallery) {
          $scope.videoGallery.updating = null;
          $scope.videoGallery.status = "Saved";
        }, function(error) {
          $scope.videoGallery.updating = null;
          $scope.videoGallery.status = "Error";
          if($scope.errors){
            $scope.errors.push(error);
          }else{
            $scope.errors = [error];
          }
        });
    };
  });

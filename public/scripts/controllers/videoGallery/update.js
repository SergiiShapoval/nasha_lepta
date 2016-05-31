'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:VideoGalleryUpdateCtrl
 * @description
 * # VideoGalleryUpdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('VideoGalleryUpdateCtrl', function ($scope, PlaylistFetcher, YoutubeListResponseConverter, FireObjects, SubProjectPrefixer, PlayListIdExtractor) {
    //initial state
    var videoModelsLocation = SubProjectPrefixer('video-gallery');
    $scope.videoModelsLocation=videoModelsLocation;
    $scope.videoGallery=FireObjects.findSingle(videoModelsLocation);

    $scope.fetchYoutubeData = function() {
      $scope.errors = null;
      $scope.fetching = true;
      $scope.status = null;
      var playlistId = PlayListIdExtractor($scope.videoGallery.playlistUrl);
      if (playlistId === 'nope'){
        if($scope.errors){
          $scope.errors.push('Incorrect URL of playlist used: ' + $scope.videoGallery.playlistUrl);
        }else{
          $scope.errors = ['Incorrect URL of playlist used: ' + $scope.videoGallery.playlistUrl];
        }

        $scope.fetching = null;
        $scope.status = 'Fetching error';
      }else {
        PlaylistFetcher(playlistId).then(
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
      }


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

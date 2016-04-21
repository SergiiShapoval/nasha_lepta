'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('LandingCtrl', function ($scope, FireObjects, SubProjectPrefixer, $location, modelGrouper, $uibModal) {

    $scope.slides = FireObjects.all(SubProjectPrefixer($location.path(), 'slides'));

    $scope.albums = FireObjects.all(SubProjectPrefixer($location.path(), 'albums'));

    $scope.$watch('albums', function(models){
      $scope.albumGroups = modelGrouper(models, 3);
    }, true);

    $scope.videoGallery=FireObjects.findSingle(SubProjectPrefixer($location.path(), 'videoGallery'));

    $scope.$watch('videoGallery', function(videoGallery){
      $scope.videoGroups = modelGrouper(videoGallery.data, 3);
    }, true);


    $scope.open = function (video) {
      var modalInstance = $uibModal.open({
        animation: true,
        template: '<div class="embed-responsive embed-responsive-16by9"><youtube-video class="embed-responsive-item" video-id="video.youtubeId" player-vars="playerVars"></youtube-video></div>',
        controller: 'ModalInstanceCtrl',
        size: 'lg',
        resolve: {
          video: function () {
            return video;
          }
        }
      });
    };

    $scope.news = FireObjects.all(SubProjectPrefixer($location.path(), 'news'));

  });

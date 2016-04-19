'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('LandingCtrl', function ($scope, FireObjects, modelGrouper) {

    $scope.slides = FireObjects.all('slides');

    $scope.albums = FireObjects.all('albums');

    $scope.$watch('albums', function(models){
      $scope.albumGroups = modelGrouper(models, 3);
    }, true);

    $scope.videoGallery=FireObjects.findSingle('videoGallery');

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

    $scope.news = FireObjects.all('news');

  });

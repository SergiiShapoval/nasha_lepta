'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:VideoGalleryListCtrl
 * @description
 * # VideoGalleryListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('VideoGalleryListCtrl', function ($scope, FireObjects, $uibModal) {
    $scope.videoGallery=FireObjects.findSingle('videoGallery');

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
  });

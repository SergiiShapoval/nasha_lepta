'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('LandingCtrl', function ($scope, FireObjects, SubProjectPrefixer, modelGrouper, $uibModal, $filter, $log, GroupQtyResizer, $window) {

    var groupsQty = GroupQtyResizer.getQty($window.innerWidth);

    var slideModelsLocation = SubProjectPrefixer('slides');
    $scope.slideModelsLocation=slideModelsLocation;
    $scope.slides = FireObjects.all(slideModelsLocation);

    var albumModelsLocation = SubProjectPrefixer('albums');
    $scope.albumModelsLocation=albumModelsLocation;
    $scope.albums = FireObjects.all(albumModelsLocation);

    $scope.$watch('albums', function(models){
      $scope.albumGroups = modelGrouper(models, groupsQty);
    }, true);

    var videoModelsLocation = SubProjectPrefixer('video-gallery');
    $scope.videoGallery=FireObjects.findSingle(videoModelsLocation);

    $scope.$watch('videoGallery', function(videoGallery){
      $scope.videoGroups = modelGrouper(videoGallery.data, groupsQty);
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

    var noveltyModelsLocation = SubProjectPrefixer('news');
    $scope.noveltyModelsLocation=noveltyModelsLocation;
    $scope.news = [];

    FireObjects.all(noveltyModelsLocation).$loaded().then(
      function(fireNews){
        fireNews = $filter('orderBy')(fireNews, '-date');
        $scope.news = fireNews.slice(0,3);
      },
      function(error){
        $log.error('LandingCtrl#FireObjects.all(news): ' + error)
      }
    );

  });

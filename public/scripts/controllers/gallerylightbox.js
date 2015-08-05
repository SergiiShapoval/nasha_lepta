'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:GalleryLightboxCtrl
 * @description
 * # GalleryLightboxCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('GalleryLightboxCtrl', function ($scope, Lightbox) {
    $scope.openLightboxModal = function (index) {
      Lightbox.keyboardNavEnabled=false;
      Lightbox.openModal($scope.photoObjects, index);
    };
  });

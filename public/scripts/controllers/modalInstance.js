'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ModalInstanceCtrl
 * @description
 * # ModalInstanceCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ModalInstanceCtrl', function ($scope, video) {
    $scope.video = video;
    $scope.playerVars = {
      autoplay: 1
    };
  });

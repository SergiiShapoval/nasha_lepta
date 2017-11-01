'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('MainCtrl', ['$rootScope', '$location', 'Lightbox', '$uibModal',
    function ($rootScope, $location, Lightbox, $uibModal) {

      //return current location to find out which button to show
      $rootScope.location = function () {
        return $location.path();
      };



    //  lightbox configuration
      $rootScope.openLightboxModal = function (url) {
        var array = [url];
        console.log(array);
        Lightbox.keyboardNavEnabled=false;
        Lightbox.openModal(array, 0);
      };


      $rootScope.openMap = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: 'templates/pages/map.html',
          size: 'lg'
        });
      };
    }]);

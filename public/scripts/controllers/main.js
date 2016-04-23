'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('MainCtrl', ['$rootScope', '$location', 'Lightbox',
    function ($rootScope, $location, Lightbox) {

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
    }]);

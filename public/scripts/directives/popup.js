'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:popUp
 * @description
 * # popUp
 */
angular.module('nashaLeptaApp')
  .directive('popUp', function () {
    return {
      replace:true,
      templateUrl: 'templates/directives/pop-up.html',
      scope:{
        src: '@',
        width: '@',
        height: '@'
      },
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
      },
      controller : function ($scope, Lightbox) {
        $scope.openLightboxModal = function (url) {
          var array = [url];
          console.log(array);
          Lightbox.keyboardNavEnabled=false;
          Lightbox.openModal(array, 0);
        };
      }
    };
  });

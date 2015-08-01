'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlRandomAlbum
 * @description
 * # nlRandomAlbum
 */
angular.module('nashaLeptaApp')
  .directive('nlRandomAlbum', function () {
    return {
      templateUrl: 'templates/directives/nl-random-album.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the nlRandomAlbum directive');
      }
    };
  });

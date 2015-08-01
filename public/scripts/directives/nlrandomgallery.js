'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlRandomGallery
 * @description
 * # nlRandomGallery
 */
angular.module('nashaLeptaApp')
  .directive('nlRandomGallery', function () {
    return {
      replace: true,
      templateUrl: 'templates/directives/nl-random-gallery.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });

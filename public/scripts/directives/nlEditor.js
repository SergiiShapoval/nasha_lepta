'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlEditor
 * @description
 * # nlEditor
 */
angular.module('nashaLeptaApp')
  .directive('nlEditor', function () {
      return {
        templateUrl: 'templates/directives/nl-editor.html',
        controller : 'NlEditorCtrl',
        restrict: 'E',
        scope :{
          data : '@'
        }
      };
    });

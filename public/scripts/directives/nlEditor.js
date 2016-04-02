'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlEditor
 * @description
 * # nlEditor
 * receive html value, can update and show it, can save any changes,
 * parent scope is responsible for saving
 */
angular.module('nashaLeptaApp')
  .directive('nlEditor', function () {
      return {
        templateUrl: 'templates/directives/nl-editor.html',
        controller : 'NlEditorCtrl',
        restrict: 'E',
        scope :{
          data : '='
        }
      };
    });

'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlEditor
 * @description
 * # nlEditor
 */
angular.module('nashaLeptaApp')
  .directive('nlEditor', [
    "$sce", "IsNeedToCompileFurther",
    function () {
      //used values:
      //toEdit - html value from parent
      //isEdit - are we editing now, true by default;
      //isPreview - false be Default
      //toShowCompile - used if we need to recompile further our object
      //toShow - used if we just need to inject given value as html


        return {
      templateUrl: 'templates/directives/nl-editor.html',
      restrict: 'E',
      //scope :{
        //toEdit : '='
      //},
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the nlEditor directive');
      //}
      controller : 'UpdateTemplateCtrl'
    };
  }]);

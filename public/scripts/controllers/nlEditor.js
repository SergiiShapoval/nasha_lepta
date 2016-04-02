'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NlEditorCtrl
 * @description
 * # NlEditorCtrl
 * Controller of the nashaLeptaApp
 * receive html value, can update and show it, can save any changes,
 * parent scope is responsible for saving
 */
angular.module('nashaLeptaApp')
  .controller('NlEditorCtrl', function ($scope, editorOptions, $sce, IsNeedToCompileFurther) {
    $scope.editorOptions = editorOptions;
    //we will use it only on edit pages, isolated scope
    $scope.isPreview = false;

    var value = $scope.data;
    //Check if we need to compile further or directly inject html if we have non-null value
    if(value && IsNeedToCompileFurther(value)){
      $scope.toShow=null;
      $scope.toShowCompile=value;
    }else{
      $scope.toShow = $sce.trustAsHtml(value);
      $scope.toShowCompile=null;
    }

    $scope.edit = function () {
      $scope.isPreview = false;
    };

    $scope.preview = function(){
      $scope.isPreview = true;
      var value = $scope.data;
      //Check if we need to compile further or directly inject html
      if(IsNeedToCompileFurther(value)){
        $scope.toShow=null;
        $scope.toShowCompile=value;
      }else{
        $scope.toShow = $sce.trustAsHtml(value);
        $scope.toShowCompile=null;
      }
    };
  });

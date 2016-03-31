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

    var value = $scope.data;
    //Check if we need to compile further or directly inject html
    if(IsNeedToCompileFurther(value)){
      $scope.toShow=null;
      $scope.toShowCompile=value;
    }else{
      $scope.toShow = $sce.trustAsHtml(value);
      $scope.toShowCompile=null;
    }

    $scope.edit = function () {
      $scope.isEdit = true;
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

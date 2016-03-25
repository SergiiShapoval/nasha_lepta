'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:UpdateTemplateCtrl
 * @description
 * # UpdateTemplateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('UpdateTemplateCtrl', function ($scope, editorOptions, $sce, Lightbox) {
    $scope.editorOptions = editorOptions;

    $scope.edit = function () {
      $scope.isEdit = true;
      $scope.isPreview = false;
    };

    $scope.preview = function(){
      $scope.isPreview = true;
      //TODO create a logic with toShowCompile
      $scope.toShow =
        $sce.trustAsHtml(
          $scope.toEdit.$value
        )
      ;
    };

    $scope.save = function(){
      $scope.toEdit.$save();
      $scope.toShow =
        $sce.trustAsHtml(
          $scope.toEdit.$value
        )
      ;
      $scope.isEdit = false;
    };

    $scope.openLightboxModal = function (url) {
      var array = [url];
      console.log(array);
      Lightbox.keyboardNavEnabled=false;
      Lightbox.openModal(array, 0);
    };


  });

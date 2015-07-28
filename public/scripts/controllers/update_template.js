'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:UpdateTemplateCtrl
 * @description
 * # UpdateTemplateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('UpdateTemplateCtrl', function ($scope, editorOptions, $sce) {
    $scope.editorOptions = editorOptions;

    $scope.edit = function () {
      $scope.isEdit = true;
      $scope.isPreview = false;
    };

    $scope.preview = function(){
      $scope.isPreview = true;
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

  });

'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:UpdateTemplateCtrl
 * @description
 * # UpdateTemplateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('UpdateTemplateCtrl', function ($scope, editorOptions, $sce, Lightbox, IsNeedToCompileFurther, FirebaseLink, $firebaseObject) {

    $scope.editorOptions = editorOptions;

    $firebaseObject(new Firebase(FirebaseLink+'/'+ $scope.data)).$loaded()
      .then(function(data) {
        //create one object for better understanding
        var value = data.$value;
        $scope.toEdit = data;
        //Check if we need to compile further or directly inject html
        if(IsNeedToCompileFurther(value)){
          $scope.toShow=null;
          $scope.toShowCompile=value;
        }else{
          $scope.toShow = $sce.trustAsHtml(value);
          $scope.toShowCompile=null;
        }
      })
      .catch(function(error) {
        console.error("Error:", error);
      });



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

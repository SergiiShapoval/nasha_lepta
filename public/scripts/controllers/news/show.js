'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsShowCtrl
 * @description
 * # NewsShowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsShowCtrl', function ($scope, $routeParams, FireObjects, IsNeedToCompileFurther, $sce) {
    FireObjects.find('news', $routeParams.id).$loaded()
      .then(function(novelty) {
        var result = novelty.body;
        if(IsNeedToCompileFurther(result)){
          $scope.toShow=null;
          $scope.toShowCompile=result;
        }else{
          $scope.toShow = $sce.trustAsHtml(result);
          $scope.toShowCompile=null;
        }
        $scope.novelty = novelty;
      }, function(error) {
        console.error("NewsShowCtrl Error:", error);
      })
  });

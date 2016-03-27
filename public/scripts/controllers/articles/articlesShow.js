'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticlesshowCtrl
 * @description
 * # ArticlesshowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesShowCtrl', function ($scope, $routeParams, FireObjects, IsNeedToCompileFurther, $sce) {

    FireObjects.find('articles', $routeParams.id).$loaded()
      .then(function(data) {
        //create one object for better understanding
        var result = data.body;
        if(IsNeedToCompileFurther(result)){
          $scope.toShow=null;
          $scope.toShowCompile=result;
        }else{
          $scope.toShow = $sce.trustAsHtml(result);
          $scope.toShowCompile=null;
        }
      }, function(error) {
        console.error("ArticlesShowCtrl Error:", error);
      })
  });

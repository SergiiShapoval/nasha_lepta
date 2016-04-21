'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticlesshowCtrl
 * @description
 * # ArticlesshowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesShowCtrl', function ($scope, $routeParams, FireObjects, SubProjectPrefixer, $location, IsNeedToCompileFurther, $sce) {

    FireObjects.find(SubProjectPrefixer($location.path(), 'articles'), $routeParams.id).$loaded()
      .then(function(article) {
        //create one object for better understanding
        var result = article.body;
        if(IsNeedToCompileFurther(result)){
          $scope.toShow=null;
          $scope.toShowCompile=result;
        }else{
          $scope.toShow = $sce.trustAsHtml(result);
          $scope.toShowCompile=null;
        }
        $scope.article = article;
      }, function(error) {
        console.error("ArticlesShowCtrl Error:", error);
      })
  });

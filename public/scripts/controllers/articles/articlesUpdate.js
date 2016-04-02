'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticlesupdateCtrl
 * @description
 * # ArticlesupdateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesUpdateCtrl', function ($scope,$routeParams, FireObjects ) {


    FireObjects.find('articles', $routeParams.id).$loaded()
      .then(function(fireArticle) {
        $scope.article = fireArticle;
        $scope.article.updating = null;
      }, function(error) {
        $scope.errors = [error];
      });

    $scope.updateArticle = function(article) {
      $scope.article.updating = true;
      $scope.article.status = null;
      $scope.article.$save()
        .then(function(fireArticle) {
          $scope.article.updating = null;
          $scope.article.status = "Saved";
        }, function(error) {
          $scope.article.updating = null;
          $scope.article.status = "Error";
          $scope.errors = [error];
        });
    };
  });

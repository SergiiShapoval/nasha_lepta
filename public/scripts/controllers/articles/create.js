'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticlescreateCtrl
 * @description
 * # ArticlescreateCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesCreateCtrl', function ($scope, FireObjects, SubProjectPrefixer, ModelCopier) {
    $scope.article ={
      id : "fill-me",
      body: "Текст для вставки"
    };

    var articleModelsLocation = SubProjectPrefixer('articles');
    $scope.articleModelsLocation=articleModelsLocation;

    $scope.updateArticle = function(article) {
      $scope.errors = null;
      $scope.article.updating = true;
      $scope.article.status = null;
      //load
      FireObjects.find(articleModelsLocation, article.id).$loaded()
        .then(function(fireArticle) {
          //resave model from form
          ModelCopier(article, fireArticle);
          //saving in firebase result
          fireArticle.$save();
          $scope.article.updating = null;
          $scope.article.status = "Saved";
        }, function(error) {
          $scope.errors = [error];
          $scope.article.updating = null;
          $scope.article.status = "Error";
        });
    };
  });

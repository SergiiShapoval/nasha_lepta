'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticleslistCtrl
 * @description
 * # ArticleslistCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesListCtrl', function ($scope, FireObjects, SubProjectPrefixer) {
    var articleModelsLocation = SubProjectPrefixer('articles');
    $scope.articleModelsLocation=articleModelsLocation;
    $scope.articles = FireObjects.all(articleModelsLocation);
  });

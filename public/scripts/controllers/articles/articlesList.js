'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticleslistCtrl
 * @description
 * # ArticleslistCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesListCtrl', function ($scope, FireObjects) {
    $scope.articles = FireObjects.all('articles');
  });

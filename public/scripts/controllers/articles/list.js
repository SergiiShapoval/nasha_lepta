'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ArticleslistCtrl
 * @description
 * # ArticleslistCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ArticlesListCtrl', function ($scope, FireObjects, SubProjectPrefixer, $location) {
    $scope.articles = FireObjects.all(SubProjectPrefixer($location.path(), 'articles'));
  });

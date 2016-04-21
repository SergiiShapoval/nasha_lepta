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
    $scope.articles = FireObjects.all(SubProjectPrefixer( 'articles'));
  });

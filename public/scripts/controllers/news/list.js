'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsListCtrl
 * @description
 * # NewsListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsListCtrl', function ($scope, FireObjects, SubProjectPrefixer, $location) {
    $scope.news = FireObjects.all(SubProjectPrefixer($location.path(), 'news'))
  });

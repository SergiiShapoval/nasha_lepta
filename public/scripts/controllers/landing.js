'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('LandingCtrl', function ($scope, FireObjects, modelGrouper) {
    $scope.news = FireObjects.all('news');

    $scope.$watch('news', function(models){
      $scope.groupedNews = modelGrouper(models, 3);
    }, true);
  });

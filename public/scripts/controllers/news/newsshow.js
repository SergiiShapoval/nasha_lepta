'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsShowCtrl
 * @description
 * # NewsShowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsShowCtrl', function ($scope, $routeParams, FireObjects) {
    FireObjects.find('news', $routeParams.id).$loaded()
      .then(function(novelty) {
        $scope.novelty = novelty;
        //convert back date from persistent
        $scope.novelty.date= new Date(novelty.date);
      }, function(error) {
        console.error("NewsShowCtrl Error:", error);
      })
  });

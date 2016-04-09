'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:NewsListCtrl
 * @description
 * # NewsListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('NewsListCtrl', function ($scope, FireObjects) {
    $scope.news = FireObjects.all('news')

    //convert back date from persistent
    $scope.news.forEach(function(novelty, index, array){
      //console.log("novelty.date: " + novelty.date);
      novelty.date = new Date(novelty.date);
    })
  });

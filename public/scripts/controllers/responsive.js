'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ResponsiveCtrl
 * @description
 * # ResponsiveCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ResponsiveCtrl', function ($scope, $window) {
    $scope.news2015= function(){
      return $window.innerWidth > 765;
    }
    $scope.about= function(){
      return $window.innerWidth > 765;
    }
    $scope.articles= function(){
      return $window.innerWidth > 765;
    }
    $scope.gratitude= function(){
      return $window.innerWidth > 765;
    }
    $scope.photos= function(){
      return $window.innerWidth > 938;
    }
    $scope.videos= function(){
      return $window.innerWidth > 1335;
    }
    $scope.contacts= function(){
      //console.log($window.innerWidth);
      return $window.innerWidth > 1440;
    }

    $window.onresize = function () {
      $scope.news2015();
      $scope.about();
      $scope.articles();
      $scope.gratitude();
      $scope.photos();
      $scope.videos();
      $scope.contacts();
    }
  });

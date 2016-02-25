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
    $scope.news2016= function(){
      //return true;
      return $window.innerWidth > 770;
    }
    $scope.about= function(){
      //return true;
      return $window.innerWidth > 770;
    }
    $scope.articles= function(){
      //return true;
      return $window.innerWidth > 770;
    }
    $scope.gratitude= function(){
      //return true;
      return $window.innerWidth > 770;
    }
    $scope.photos= function(){
      //return true;
      return $window.innerWidth > 790;
    }
    $scope.videos= function(){
      //return true;
      return $window.innerWidth > 940;
    }
    $scope.contacts= function(){
      //console.log($window.innerWidth);
      //return true;
      return $window.innerWidth > 1018;
    }

    //$window.onresize = function () {
    //  $scope.news2016();
    //  $scope.about();
    //  $scope.articles();
    //  $scope.gratitude();
    //  $scope.photos();
    //  $scope.videos();
    //  $scope.contacts();
    //}
  });

'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlRandomGroup
 * @description
 * # nlRandomGroup
 */
angular.module('nashaLeptaApp')
  .directive('nlRandomGroup', function () {
    return {
      //replace: true,
      templateUrl: 'templates/directives/nl-random-group.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


      },
      controller: function($scope){
        $scope.counter = 0;
        this.assignNumber=function(){
          console.log($scope.counter++);
          return $scope.counter;
        };

        $scope.currentRandom = Math.floor((Math.random()*1000)+1);
        console.log('currentRandom: ' + $scope.currentRandom);
      }
    };
  });

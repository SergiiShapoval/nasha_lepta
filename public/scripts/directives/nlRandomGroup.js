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
        var counter = 0;
        this.assignNumber=function(){
          return counter++;
        };

        var currentRandom = Math.floor((Math.random()*1000)+1);
        console.log('currentRandom: ' + currentRandom);

        this.getCounter = function(){
          return counter;
        };
        this.getCurrentRandom = function(){
          return currentRandom;
        };


        $scope.$on('$routeChangeStart', function(next, current) {
          currentRandom++;
          console.log('currentRandom: ' + currentRandom);
        });
      }
    };
  });

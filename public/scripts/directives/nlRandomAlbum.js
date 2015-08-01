'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlRandomAlbum
 * @description
 * # nlRandomAlbum
 */
angular.module('nashaLeptaApp')
  .directive('nlRandomAlbum', function () {
    return {
      replace:true,
      templateUrl: 'templates/directives/nl-random-album.html',
      restrict: 'E',
      scope:{
        date:'@',
        link:'@',
        title:'@',
        currentRandom:'@'
      },
      link: function postLink(scope, element, attrs, nlRandomGroupCtrl) {
        scope.number = nlRandomGroupCtrl.assignNumber();
        console.log(attrs.currentRandom);
      },
      require : '^nlRandomGroup',
      controller: function($scope){
        //var number = function
        //console.log($scope.currentRandom %2 ===$scope.number);
        //console.log($scope.currentRandom %2 ===$scope.number);
      }
    };
  });

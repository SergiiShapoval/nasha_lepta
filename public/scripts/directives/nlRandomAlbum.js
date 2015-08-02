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
        var number = nlRandomGroupCtrl.assignNumber();
        scope.isActive = function(){
          var toShow = (nlRandomGroupCtrl.getCurrentRandom() % nlRandomGroupCtrl.getCounter()) === number;
          //console.log( 'number:' + number +
          //' nlRandomGroupCtrl.getCurrentRandom(): ' + nlRandomGroupCtrl.getCurrentRandom()+
          //' nlRandomGroupCtrl.getCounter():' + nlRandomGroupCtrl.getCounter()+
          //  toShow);
          return toShow;
        }
      },
      require : '^nlRandomGroup'
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlArticle
 * @description
 * # nlArticle
 */
angular.module('nashaLeptaApp')
  .directive('nlArticle', ["$firebaseObject", "$sce",function ($firebaseObject, $sce) {
    return {
      template: '<div ng-bind-html="toShow"></div>',
      restrict: 'E',
      scope :{
        data : '@'
      },
      link: function postLink(scope, element, attrs) {
        var ref = new Firebase('https://boiling-fire-9518.firebaseio.com/'+ attrs.data);
        var receivedValue = $firebaseObject(ref);

        receivedValue.$loaded()
          .then(function(data) {
            scope.toShow =
              $sce.trustAsHtml(
                data.$value
              )
            ;
          })
          .catch(function(error) {
            console.error("Error:", error);
          });

      }
    };
  }]);

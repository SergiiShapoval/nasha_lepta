'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlArticle
 * @description
 * # nlArticle
 */
angular.module('nashaLeptaApp')
  .directive('nlArticle', function () {
      return {
        templateUrl: 'templates/directives/nl-article.html',
        restrict: 'E',
        scope :{
          data : '@',
          auth : '='
        },
        controller : 'NlArticleCtrl'
      };
    });

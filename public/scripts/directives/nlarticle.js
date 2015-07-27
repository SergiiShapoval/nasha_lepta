'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlArticle
 * @description
 * # nlArticle
 */
angular.module('nashaLeptaApp')
  .directive('nlArticle', ["$firebaseObject", "$sce", function ($firebaseObject, $sce) {
    return {
      template: '<textarea ckeditor="editorOptions" ng-model="toEdit.$value"></textarea>' +
    '<div ng-bind-html="toShow" auth="auth"></div>',
      restrict: 'E',
      scope :{
        data : '@',
        auth : '@'
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
            scope.toEdit = data;
            //console.log(scope.toEdit);
          })
          .catch(function(error) {
            console.error("Error:", error);
          });

      }
      ,
      controller : 'UpdateTemplateCtrl'
    };
  }]);

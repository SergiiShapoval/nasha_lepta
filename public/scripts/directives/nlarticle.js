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
      template:
      //'<p ng-hide="auth.isAuthenticated">Не авторизован</p>' +
      '<div ng-show="auth.user">' +
          '<button type="button" class="btn btn-primary" ng-click="edit()" ng-hide="isEdit">Изменить</button>' +
          '<div class="btn-group" role="group" aria-label="..." ng-show="isEdit" >' +
            '<button type="button" class="btn btn-default" ng-click="preview()" ng-hide="isPreview">Предпросмотр</button>' +
            '<button type="button" class="btn btn-primary" ng-click="edit()" ng-show="isPreview">Изменить</button>' +
            '<button type="button" class="btn btn-default" ng-click="save()">Сохранить</button>' +
          '</div>' +
          '<div ng-show="isEdit&&!isPreview"><textarea ckeditor="editorOptions" ng-model="toEdit.$value" ></textarea></div>' +
      '</div>' +
    '<div ng-bind-html="toShow"></div>',
      restrict: 'E',
      scope :{
        data : '@',
        auth : '='
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

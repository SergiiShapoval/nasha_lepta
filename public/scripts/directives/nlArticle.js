'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlArticle
 * @description
 * # nlArticle
 */
angular.module('nashaLeptaApp')
  .directive('nlArticle', ["$firebaseObject", "$sce", "FirebaseLink", "IsNeedToCompileFurther",
    function ($firebaseObject, $sce, FirebaseLink, IsNeedToCompileFurther) {
      return {
        templateUrl: 'templates/directives/nl-article.html',
        restrict: 'E',
        scope :{
          data : '@',
          auth : '='
        },
        //used as DOM manipulation should be done after directive compilation
        link: function postLink(scope, element, attrs) {
          var ref = new Firebase(FirebaseLink+'/'+ attrs.data);
          $firebaseObject(ref).$loaded()
            .then(function(data) {
              //create one object for better understanding
              var value = data.$value;
              scope.toEdit = value;
              //Check if we need to compile further or directly inject html
              if(IsNeedToCompileFurther(value)){
                scope.toShow=null;
                scope.toShowCompile=value;
              }else{
                scope.toShow = $sce.trustAsHtml(value);
                scope.toShowCompile=null;
              }
            })
            .catch(function(error) {
              console.error("Error:", error);
            });
        },
        controller : 'UpdateTemplateCtrl'
      };
    }]);

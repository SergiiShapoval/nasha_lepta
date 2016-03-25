'use strict';

/**
 * @ngdoc directive
 * @name nashaLeptaApp.directive:nlArticle
 * @description
 * # nlArticle
 */
angular.module('nashaLeptaApp')
  .directive('nlArticle', ["$firebaseObject", "$sce", "FirebaseLink",
    function ($firebaseObject, $sce, FirebaseLink) {
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
        var receivedValue = $firebaseObject(ref);

        receivedValue.$loaded()
          .then(function(data) {
            /*special case for picasa album*/
            //console.log(data.$value);
            if(
              (data.$value.indexOf('picasa=') > 0)
              ||
              (data.$value.indexOf('ng-') > 0)
              ||
              (data.$value.indexOf('pop-up') > 0)
            ){
              scope.toShow=null;
              scope.toShowCompile=data.$value;
              console.log('in toShowCompile');
            }else{
              scope.toShow =
                $sce.trustAsHtml(
                  data.$value
                )
              ;
              scope.toShowCompile=null;
            }
/*to commit delete after*/
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

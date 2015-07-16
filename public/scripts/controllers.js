'use strict';
/* Controllers */
var controllerModule = angular.module('nashaLeptaApp.controllers', []);



angular.module('nashaLeptaApp').controller("FireViewsCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://boiling-fire-9518.firebaseio.com/views");
  $scope.views = $firebaseArray(ref);

  for (var template in $scope.views)
  {
    controllerModule.controller(appData.views[template].controller, ["$scope", template, function (scope, data) {
      scope.data = data;
    }]);
  }


});

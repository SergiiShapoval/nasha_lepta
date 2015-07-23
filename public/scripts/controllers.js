'use strict';
/* Controllers */
var controllerModule = angular.module('nashaLeptaApp.controllers', []);
angular.module('nashaLeptaApp').controller("FireViewsCtrl", function($scope, $firebaseArray) {

  var ref = new Firebase("https://boiling-fire-9518.firebaseio.com");
  var views = $firebaseArray(ref);
  views.$add(appData.views);
  for (var view in appData.views) {

  }
});



for (var template in appData.views)
{
	controllerModule.controller(appData.views[template].controller, ["$scope", template, function (scope, data) {
		scope.data = data;
	}]);
}


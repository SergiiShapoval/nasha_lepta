'use strict';
/* Controllers */
var controllerModule = angular.module('nashaLeptaApp.controllers', []);

for (var template in appData.views)
{
	controllerModule.controller(appData.views[template].controller, ["$scope", template, function (scope, data) {
		scope.data = data;
	}]);
}


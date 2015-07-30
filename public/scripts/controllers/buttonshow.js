'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:ButtonShowCtrl
 * @description
 * # ButtonShowCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('ButtonShowCtrl',['$scope', '$location', function($scope, $location) {

    $scope.location = function(){
      return $location.path();
    };

  }]);

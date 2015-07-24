'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AuthCtrl', [
    '$scope', '$rootScope', '$firebaseAuth', function($scope, $rootScope, $firebaseAuth) {
      var ref = new Firebase('https://boiling-fire-9518.firebaseio.com/');
      $rootScope.auth = $firebaseAuth(ref);

      $scope.signIn = function () {
        $rootScope.auth.$authWithPassword({
          email: $scope.email,
          password: $scope.password
        }).then(function(authData) {
          //console.log("Logged in as:", authData.uid);
          $rootScope.auth.user = authData.password;
          //console.log($scope.auth);
        }).catch(function(error) {
          console.error("Authentication failed:", error);
        });
      };

      $scope.logOut = function () {
        $rootScope.auth.$unauth();
        $rootScope.auth.user=null;
      };

    }
  ]);

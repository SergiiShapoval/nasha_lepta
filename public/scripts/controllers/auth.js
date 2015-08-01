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
    '$scope', '$rootScope', '$firebaseAuth', 'FirebaseLink',
    function($scope, $rootScope, $firebaseAuth, FirebaseLink) {
      var ref = new Firebase(FirebaseLink);
      $rootScope.auth = $firebaseAuth(ref);
      $scope.isShowLogin =false;

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

      $scope.showLogin = function () {
        $scope.isShowLogin=!$scope.isShowLogin;
      };

    }
  ]);

'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.FireObjects
 * @description
 * # FireObjects
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('FireObjects', [
    'FirebaseLink',
    '$firebaseArray',
    '$firebaseObject',
    function FireObjectsFactory(FirebaseLink, $firebaseArray, $firebaseObject) {
      return {
        all: function(models) {
          var ref = new Firebase(FirebaseLink+"/"+models+"/");
          return $firebaseArray(ref);
        },
        find: function(models, id){
          var ref = new Firebase(FirebaseLink+"/"+models+"/" + id);
          return $firebaseObject(ref);
        },
        update: function(model) {
          console.log('FireObjectsFactory: update method is blocked, use .$save() on $firebaseObject\n' +
          'Details on https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-firebaseobject-save');
        },
        create: function(models, id) {
          var ref = new Firebase(FirebaseLink+"/"+models+"/" + id);
          return $firebaseObject(ref);
        },
        findSingle:function(id){
          var ref = new Firebase(FirebaseLink+"/"+ id);
          return $firebaseObject(ref);
        }
      };
    }]);

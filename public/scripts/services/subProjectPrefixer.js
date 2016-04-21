'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.SubProjectPrefixer
 * @description
 * # SubProjectPrefixer
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('SubProjectPrefixer', function () {
    var subProjects = ['exposition', 'evenings', 'accounting'];



    return function(location, models){

      var i;
      for(i in subProjects){
        if(location.indexOf(subProjects[i]) > -1){
          return subProjects[i] + '/' + models;
        }
      }

      return models;
    }
  });

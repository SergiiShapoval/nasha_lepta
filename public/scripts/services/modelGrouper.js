'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.modelGrouper
 * @description
 * # modelGrouper
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('modelGrouper', function () {
    return function(models, qtyInGroup) {
      var i, j, groupCollection = [];
      for (i = 0; i < models.length; i += qtyInGroup) {
        var group = [];
        for (j = 0; j < qtyInGroup; j++) {
          if (models[i + j]) {
            group.push(models[i + j]);
          } else {
            break;
          }
        }
        groupCollection.push(group);
      }
      return groupCollection;
    }
  });

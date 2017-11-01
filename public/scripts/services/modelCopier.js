'use strict';

/**
 * @ngdoc factory
 * @name nashaLeptaApp.ModelCopier
 * @description
 * # ModelCopier
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('ModelCopier', function ModelCopierFactory () {
    function copy(modelFrom, modelTo){
      for (var attr in modelFrom) {
        if (modelFrom.hasOwnProperty(attr)){

          modelTo[attr] = modelFrom[attr];
        }
      }
    }

    return copy;
  });



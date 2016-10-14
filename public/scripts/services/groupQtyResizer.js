'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.GroupQtyResizer
 * @description
 * # GroupQtyResizer
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('GroupQtyResizer', function () {
    return {
      getQty: function (windowWidth) {
          if (windowWidth > 800)
              return 3;
          if (windowWidth > 450)
              return 2;
          return 1;
      }
    };
  });

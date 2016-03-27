'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.IsNeedToCompileFurther
 * @description
 * # IsNeedToCompileFurther
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('IsNeedToCompileFurther', function () {
    return function isNeedToCompileFurther(value) {
      return (value.indexOf('picasa=') > 0)
        ||
        (value.indexOf('ng-') > 0)
        ||
        (value.indexOf('pop-up') > 0);
    }
  });

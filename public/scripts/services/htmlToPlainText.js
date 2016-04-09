'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.htmlToPlainText
 * @description
 * # htmlToPlainText
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('htmlToPlainText', function () {
    return function(text){
      return text ? String(text).replace(/<[^>]+>/gm, ' ') : '';
    };
  });

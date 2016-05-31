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
      text = text ? String(text).replace(/<[^>]+>/gm, ' ') : '';
      text = text ? String(text).replace(/&nbsp;/gm, '') : '';

      return text;
    };
  });

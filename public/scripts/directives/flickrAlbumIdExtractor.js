'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.flickrAlbumIdExtractor
 * @description
 * # flickrAlbumIdExtractor
 * Service in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .service('flickrAlbumIdExtractor', function () {
    return function(flickrAlbumUrl) {
      var reg =  /\/albums\/(\d+)/;
      var match = reg.exec(flickrAlbumUrl);
      if (match&&match[1].length>0) {
        return match[1];
      }
      return '';
    };
  });

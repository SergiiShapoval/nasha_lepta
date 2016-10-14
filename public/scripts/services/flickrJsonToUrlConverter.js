'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.flickrJsonToUrlConverter
 * @description
 * # flickrJsonToUrlConverter
 * Service in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .service('flickrJsonToUrlConverter', function () {
    return function(flickrJson){
      return flickrJson.photoset.photo.map(function(item){
        return 'https://farm' + item.farm + '.staticflickr.com/'
          + item.server + '/' + item.id + '_' + item.secret + '_z.jpg'
      });
    };
  });

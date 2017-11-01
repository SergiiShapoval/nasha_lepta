'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.YoutubeListResponseConverter
 * @description
 * # YoutubeListResponseConverter
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('YoutubeListResponseConverter', function () {
    return function(responseBody){
      return responseBody.items.map(function(item, index, array){
        return {
          youtubeId: item.snippet.resourceId.videoId,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          thumbnailUrl: item.snippet.thumbnails.high.url
        }
      });
    };
  });

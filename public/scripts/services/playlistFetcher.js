'use strict';

/**
 * @ngdoc service
 * @name nashaLeptaApp.PlaylistFetcher
 * @description
 * # PlaylistFetcher
 * Factory in the nashaLeptaApp.
 */
angular.module('nashaLeptaApp')
  .factory('PlaylistFetcher', function ($http, YoutubeKeyHolder) {
    return function(playlistId){
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/playlistItems',
        params: {
          part : 'snippet',
          playlistId : playlistId,
          key: YoutubeKeyHolder,
          maxResults: 50
        }
      });
    }
  });

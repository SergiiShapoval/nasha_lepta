'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:AlbumslistCtrl
 * @description
 * # AlbumslistCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('AlbumsListCtrl', function ($scope, FireObjects) {
    $scope.albums = FireObjects.all('albums')

    //convert back date from persistent
    $scope.albums.forEach(function(album, index, array){
      //console.log("album.date: " + album.date);
      album.date = new Date(album.date);
    })
  });

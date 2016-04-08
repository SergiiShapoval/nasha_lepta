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
    $scope.albums = FireObjects.all('albums').sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date);
    });

    //convert back date from persistent
    $scope.albums.forEach(function(album, index, array){
      //console.log("album.date: " + album.date);
      album.date = new Date(album.date);
    })
  });

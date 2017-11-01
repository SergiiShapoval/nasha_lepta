'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:GoogleMapCtrl
 * @description
 * # GoogleMapCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('GoogleMapCtrl', function ($scope, uiGmapGoogleMapApi) {
    // for the map
    uiGmapGoogleMapApi.then(function (maps) {
    });

    $scope.map = {
      center: {
        latitude: 50.427852,
        longitude: 30.527468
      },
      draggable: true,
      zoom: 15,
      options : {
        scrollwheel: true
      }
    };
// map options

    $scope.gMapMarkers=[
      {
        id: 0,
        coords: {
          latitude: 50.427852,
          longitude: 30.527468
        },
        options: {
          draggable: false,
          title: 'Церква святителя Миколая Чудотворця',
          animation: 1 // 1: BOUNCE, 2: DROP
        }
      }
    ];
  });

'use strict';

/**
 * @ngdoc function
 * @name nashaLeptaApp.controller:SlidesListCtrl
 * @description
 * # SlidesListCtrl
 * Controller of the nashaLeptaApp
 */
angular.module('nashaLeptaApp')
  .controller('SlidesListCtrl', function ($scope, FireObjects, SubProjectPrefixer, $log) {
    $scope.slides = [{
      buttonName: "Подробнее...",
      cover: "images/slides/gratitude_in_mitropoli.3e9e815b.jpg",
      description: "Проектом переданы средства на завершение строительства дома для сирот в Хмельницкой области.",
      detailsLink: "#/news",
      id: "0",
      title: "АКЦИЯ"
    }];

    var slideModelsLocation = SubProjectPrefixer('slides');
    $scope.slideModelsLocation=slideModelsLocation;

    FireObjects.all(slideModelsLocation).$loaded().then(
      function(fireSlides){
        var combinedSlides = $scope.slides.concat(fireSlides);

        $scope.slides = combinedSlides;
      },
      function(error){
        $log.error('SlidesListCtrl#FireObjects.all: ' + error)
      }
    );
  });

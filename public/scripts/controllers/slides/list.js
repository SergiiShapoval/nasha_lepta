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
      buttonName: "Узнать больше",
      cover: "http://mitropolia.kiev.ua/wp-content/uploads/2016/03/DSC_03591.jpg",
      description: "Діє з благословення Блаженнішого Митрополита Київського і всієї України Онуфрія та створений на базі храму святителя Миколая",
      detailsLink: "#/news",
      id: "0",
      title: "Благодійний проект «Наша Лепта»"
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

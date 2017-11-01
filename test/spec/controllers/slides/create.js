'use strict';

describe('Controller: SlidesCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var SlidesCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidesCreateCtrl = $controller('SlidesCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('check first object is setted correctly', function () {
    expect(scope.slide).toBeDefined();
    expect(scope.slide.id).toEqual("fill-me");
    expect(scope.slide.title).toEqual("Заглавие слайда");
    expect(scope.slide.description).toEqual("Описание слайда");
    expect(scope.slide.buttonName).toEqual("Надпись на кнопке");
    expect(scope.slide.cover).toEqual("images/slides/children_day.f1eca941.jpg");
    expect(scope.slide.detailsLink).toEqual("#/news");
  });
  it('check services are set correctly', function () {
    expect(scope.updateSlide).toBeDefined();
  });
});

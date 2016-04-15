'use strict';

describe('Controller: SlidesUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var SlidesUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidesUpdateCtrl = $controller('SlidesUpdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.updateSlide).toBeDefined();
    expect(scope.removeSlide).toBeDefined();
    expect(scope.changeRoute).toBeDefined();
  });
});

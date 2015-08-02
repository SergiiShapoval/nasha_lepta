'use strict';

describe('Controller: MaincarouselCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var MaincarouselCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MaincarouselCtrl = $controller('MaincarouselCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

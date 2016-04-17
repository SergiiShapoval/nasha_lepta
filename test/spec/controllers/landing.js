'use strict';

describe('Controller: LandingCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var LandingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LandingCtrl = $controller('LandingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('news defined correctly', function () {
    expect(scope.news).toBeDefined();
  });
});

'use strict';

describe('Controller: ResponsiveCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var ResponsiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponsiveCtrl = $controller('ResponsiveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

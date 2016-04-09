'use strict';

describe('Controller: NewsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsShowCtrl = $controller('NewsShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsShowCtrl.awesomeThings.length).toBe(3);
  });
});

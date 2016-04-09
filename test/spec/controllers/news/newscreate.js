'use strict';

describe('Controller: NewsCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsCreateCtrl = $controller('NewsCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsCreateCtrl.awesomeThings.length).toBe(3);
  });
});

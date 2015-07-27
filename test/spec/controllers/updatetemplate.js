'use strict';

describe('Controller: UpdatetemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var UpdatetemplateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdatetemplateCtrl = $controller('UpdatetemplateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

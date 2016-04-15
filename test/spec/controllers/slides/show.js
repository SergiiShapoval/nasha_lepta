'use strict';

describe('Controller: SlidesShowCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var SlidesShowCtrl,
    scope,
    FireObjects;


  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
    spyOn(FireObjects, "find").and.callThrough();
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlidesShowCtrl = $controller('SlidesShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FireObjects.find).toHaveBeenCalled();
  });
});

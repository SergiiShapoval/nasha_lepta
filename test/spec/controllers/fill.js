'use strict';

describe('Controller: FillctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var FillctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FillctrlCtrl = $controller('FillctrlCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
  });
});

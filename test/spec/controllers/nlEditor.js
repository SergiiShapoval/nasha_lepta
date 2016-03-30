'use strict';

describe('Controller: NlEditorCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NlEditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NlEditorCtrl = $controller('NlEditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.editorOptions).toBeDefined();
  });
});

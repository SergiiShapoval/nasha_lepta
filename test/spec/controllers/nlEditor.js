'use strict';

describe('Controller: NlEditorCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NlEditorCtrl,
    scope,
    randomHtml = "<div>Random text</div>";

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    scope.data = randomHtml;
    NlEditorCtrl = $controller('NlEditorCtrl', {
      $scope: scope
    });
  }));

  it('contain needed functions, test values change for preview', function () {
    expect(scope.editorOptions).toBeDefined();
    expect(scope.edit).toBeDefined();
    expect(scope.preview).toBeDefined();
    expect(scope.data).toEqual(randomHtml);
    expect(scope.toShow).toBeDefined();
    expect(scope.toShowCompile).toBeNull();

    //prepare preview changes and test it
    scope.data = "<div picasa='preview value'>Preview check text</div>"
    scope.preview();
    expect(scope.isPreview).toBeTruthy();
    expect(scope.toShow).toBeNull();
    expect(scope.toShowCompile).toBeDefined();
  });
});

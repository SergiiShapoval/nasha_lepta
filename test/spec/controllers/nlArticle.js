'use strict';

xdescribe('Controller: NlArticleCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NlArticleCtrl,
    scope;

  var createNlArticleCtrl;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller ) {
    scope = $rootScope.$new();
    NlArticleCtrl = $controller('NlArticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  beforeEach(function() {
    scope.toEdit = {
      $value : "<div></div>",
      $save: function(){}
    };
  });

  it('Ctrl and beforeEach load correctly', function () {
    expect(scope.editorOptions).toBeDefined();
    expect(scope.toEdit).toBeDefined();
  });

  it('edit working correctly', function () {
    scope.edit();
    expect(scope.isEdit).toEqual(true);
    expect(scope.isPreview).toEqual(false);
  });

  it('preview working correctly', function () {
    scope.preview();
    expect(scope.isPreview).toEqual(true);
  });

  it('save working correctly', function () {
    spyOn(scope.toEdit, "$save").and.callThrough();
    scope.save();
    expect(scope.toEdit.$save).toHaveBeenCalled();
    expect(scope.isEdit).toEqual(false);
  });
});

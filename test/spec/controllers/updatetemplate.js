'use strict';

xdescribe('Controller: UpdateTemplateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var UpdateTemplateCtrl,
    scope;

  var createUpdatetemplateCtrl;
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller ) {
    scope = $rootScope.$new();
    UpdateTemplateCtrl = $controller('UpdateTemplateCtrl', {
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

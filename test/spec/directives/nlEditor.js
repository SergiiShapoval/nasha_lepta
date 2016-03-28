'use strict';

describe('Directive: nlEditor', function () {

  //load needed template to one by one
  //beforeEach(module("templates/directives/nl-editor.html"));
  //or all templates at once
  beforeEach(angular.mock.module("templates"));

  // load the directive's module
  beforeEach(module('nashaLeptaApp'));

  var element,
    scope,
    UpdateTemplateCtrl;

  beforeEach(inject(function ($rootScope, $compile, _$httpBackend_) {
    scope = $rootScope.$new();
    element = angular.element('<nl-editor ></nl-editor>');
    element = $compile(element)(scope);
    scope.$digest();
    UpdateTemplateCtrl = element.controller;
  }));

  it('should make hidden element visible', inject(function () {

    expect(UpdateTemplateCtrl).toBeDefined();
    expect(scope.editorOptions).toBeDefined();
    //expect(element.text()).toContain('fake');
  }));
});

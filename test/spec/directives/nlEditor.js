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
    directiveCtrl,
    modelToPassValue ="some/link";

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = modelToPassValue;
    element = angular.element('<nl-editor data="{{data}}"></nl-editor>');
    element = $compile(element)(scope);
    scope.$digest();
    directiveCtrl = element.controller;
  }));

  it('should make hidden element visible', inject(function () {

    expect(directiveCtrl).toBeDefined();
    //added isolated scope for correct testing
    expect(element.isolateScope().edit).toBeDefined();
    expect(element.isolateScope().data).toBeDefined();
    expect(element.isolateScope().data).toEqual(modelToPassValue);
  }));
});

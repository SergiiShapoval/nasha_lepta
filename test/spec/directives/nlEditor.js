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
    modelToPassValue ='<div>Random text</div><img alt="" class="pop-up img-responsive thumbnail" src="http://blago.church.ua/files/2015/07/NCH_5566.jpg" />';

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = modelToPassValue;
    element = angular.element('<nl-editor data="data"></nl-editor>');
    element = $compile(element)(scope);
    scope.$digest();
    directiveCtrl = element.controller;
  }));

  it('contain visible text', inject(function () {

    expect(directiveCtrl).toBeDefined();
    //added isolated scope for correct testing
    expect(element.isolateScope().editorOptions).toBeDefined();
    expect(element.isolateScope().data).toBeDefined();
    expect(element.isolateScope().data).toEqual(modelToPassValue);
    expect(element.text()).toContain('Random text');
  }));
});

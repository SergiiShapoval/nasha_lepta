'use strict';

describe('Controller: ArticlesUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var ArticlesUpdateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlesUpdateCtrl = $controller('ArticlesUpdateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.updateArticle).toBeDefined();
  });
});

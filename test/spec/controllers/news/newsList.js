'use strict';

describe('Controller: NewsListCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var NewsListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsListCtrl = $controller('NewsListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsListCtrl.awesomeThings.length).toBe(3);
  });
});

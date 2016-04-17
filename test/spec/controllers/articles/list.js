'use strict';

describe('Controller: ArticlesListCtrl', function () {

  var articleFixtures = [{
    id: "article1",
    body: "<div>article one body</div>>"
  }, {
    id: "article2",
    body: "<div>article one body</div>>"
  }];

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service and spy on its calls
  var FireObjects;
  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
    spyOn(FireObjects, "all").and.callFake(function(models) {
      return articleFixtures;
    });
  }));

  var ArticlesListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlesListCtrl = $controller('ArticlesListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('scope should receive articles', function () {
    expect(FireObjects).toBeDefined();
    expect(FireObjects.all).toHaveBeenCalled();
    expect(scope.articles.length).toBe(2);
  });
});

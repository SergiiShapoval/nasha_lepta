'use strict';

describe('Controller: ArticlesShowCtrl', function () {
  var ArticlesShowCtrl,
    scope,
    FireObjects,
    $rootScope;

  var firebaseObjectfixture = {
    $loaded : function(){}
  };
  var promisefixture = {
    then: function(){
      scope.toShow = 'stubbed value'
    }
  };
  // load the controller's module
  beforeEach(module('nashaLeptaApp'));
  beforeEach(inject(function (_FireObjects_, _$rootScope_) {
    FireObjects = _FireObjects_;
    $rootScope = _$rootScope_;
    //remember new scope
    scope = $rootScope.$new();

    //double spy to avoid firebase stubbing
    spyOn(FireObjects, "find").and.returnValue(firebaseObjectfixture);
    spyOn(firebaseObjectfixture, "$loaded").and.returnValue(promisefixture);
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    ArticlesShowCtrl = $controller('ArticlesShowCtrl', {
      //assign scope to ctrl
      $scope: scope
    });
  }));

  it('define toShow value in scope', function () {
    expect(FireObjects).toBeDefined();
    expect(FireObjects.find).toHaveBeenCalled();
    expect(firebaseObjectfixture.$loaded).toHaveBeenCalled();
    expect(scope.toShow).toBeDefined();
    expect(scope.toShow).toEqual('stubbed value');
  });
});

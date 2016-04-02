'use strict';

describe('Controller: ArticlesCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var ArticlesCreateCtrl,
    scope,
    FireObjects;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _FireObjects_) {
    scope = $rootScope.$new();
    FireObjects= _FireObjects_;
    ArticlesCreateCtrl = $controller('ArticlesCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.updateArticle).toBeDefined();
    expect(FireObjects).toBeDefined();
    expect(FireObjects.find).toBeDefined();
    //prepare fake for firebase
    spyOn(FireObjects, "find").and.callFake(function() {
      return {
        $loaded : function(){
          return {
            then : function(){}
          }
        }
      }
    });

    //call updateArticle
    scope.updateArticle(
      {
        id:1,
        body:""
      }
    );
    //and check
    expect(FireObjects.find).toHaveBeenCalled();

  });
});

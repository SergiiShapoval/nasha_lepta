'use strict';

describe('Constant: FirebaseLink', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var FirebaseLink;
  beforeEach(inject(function (_FirebaseLink_) {
    FirebaseLink = _FirebaseLink_;
  }));

  it('should do something', function () {
    expect(!!FirebaseLink).toBe(true);
    expect(FirebaseLink).toEqual('https://boiling-fire-9518.firebaseio.com');
  });

});

//Example of Mocking Constants
describe('MockConstant: FirebaseLink', function () {

  // load the service's module
  beforeEach(angular.mock.module("nashaLeptaApp"));
  beforeEach(angular.mock.module("nashaLeptaApp", function ($provide) {
    //Attempt to override the myConstant value that gets passed to config
    $provide.constant("FirebaseLink", "check link is changed");
  }));

  // instantiate service
  var FirebaseLink;
  beforeEach(inject(function (_FirebaseLink_) {
    FirebaseLink = _FirebaseLink_;
  }));

  it('should do something', function () {
    expect(!!FirebaseLink).toBe(true);
    expect(FirebaseLink).toEqual('check link is changed');
  });

});

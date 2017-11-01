'use strict';

describe('Service: SubProjectPrefixer', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  beforeEach(module(function ($provide) {
    $provide.value('$location', {
      path: function(){
        return ''
      }
    });
  }));

  // instantiate service
  var SubProjectPrefixer, $location;
  beforeEach(inject(function (_SubProjectPrefixer_, _$location_) {
    SubProjectPrefixer = _SubProjectPrefixer_;
    $location = _$location_;
  }));

  it('SubProjectPrefixer exists', function () {
    expect(SubProjectPrefixer).toBeDefined();
  });

  it('SubProjectPrefixer returns model for any location except subProjects', function () {
    spyOn($location, "path").and.callFake(function() {
      return '/anylocation';
    });
    expect(SubProjectPrefixer('slides')).toEqual('slides');
  });

  it('SubProjectPrefixer returns model for blank location', function () {
    spyOn($location, "path").and.callFake(function() {
      return '/';
    });
    expect(SubProjectPrefixer('slides')).toEqual('slides');
  });

  it('SubProjectPrefixer returns model with subPorject for evenings', function () {
    spyOn($location, "path").and.callFake(function() {
      return '/evenings/';
    });
    expect(SubProjectPrefixer('slides')).toEqual('evenings/slides');
  });

  it('SubProjectPrefixer returns model with subPorject for exposition', function () {
    spyOn($location, "path").and.callFake(function() {
      return '/exposition/';
    });
    expect(SubProjectPrefixer('slides')).toEqual('exposition/slides');
  });

  it('SubProjectPrefixer returns model with subPorject for accounting', function () {
    spyOn($location, "path").and.callFake(function() {
      return '/accounting/anyLocation';
    });
    expect(SubProjectPrefixer('slides')).toEqual('accounting/slides');
  });

});

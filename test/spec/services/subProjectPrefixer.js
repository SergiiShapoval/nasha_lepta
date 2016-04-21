'use strict';

describe('Service: SubProjectPrefixer', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var SubProjectPrefixer;
  beforeEach(inject(function (_SubProjectPrefixer_) {
    SubProjectPrefixer = _SubProjectPrefixer_;
  }));

  it('SubProjectPrefixer exists', function () {
    expect(SubProjectPrefixer).toBeDefined();
  });

  it('SubProjectPrefixer returns model for blank location or any location except subProjects', function () {
    expect(SubProjectPrefixer).toBeDefined();
    expect(SubProjectPrefixer('/anylocation', 'slides')).toEqual('slides');
    expect(SubProjectPrefixer('/', 'slides')).toEqual('slides');
  });

  it('SubProjectPrefixer returns model with subPorject for evenings', function () {
    expect(SubProjectPrefixer('/evenings/anyLocation', 'slides')).toEqual('evenings/slides');
  });

  it('SubProjectPrefixer returns model with subPorject for exposition', function () {
    expect(SubProjectPrefixer('/exposition/anyLocation', 'slides')).toEqual('exposition/slides');
  });

  it('SubProjectPrefixer returns model with subPorject for accounting', function () {
    expect(SubProjectPrefixer('/accounting/anyLocation', 'slides')).toEqual('accounting/slides');
  });

});

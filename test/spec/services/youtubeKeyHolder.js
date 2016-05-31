'use strict';

describe('Service: YoutubeKeyHolder', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var YoutubeKeyHolder;
  beforeEach(inject(function (_YoutubeKeyHolder_) {
    YoutubeKeyHolder = _YoutubeKeyHolder_;
  }));

  it('should do something', function () {
    expect(YoutubeKeyHolder).toEqual('AIzaSyC9_SO9SJVGy5opqW435d3S80ehYkmfDC8');
  });

});

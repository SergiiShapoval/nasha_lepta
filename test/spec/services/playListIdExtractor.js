'use strict';

describe('Service: PlayListIdExtractor', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var PlayListIdExtractor;
  beforeEach(inject(function (_PlayListIdExtractor_) {
    PlayListIdExtractor = _PlayListIdExtractor_;
  }));

  it('should do something', function () {
    expect(PlayListIdExtractor).toBeDefined();
    expect(PlayListIdExtractor('')).toBeDefined();
    expect(PlayListIdExtractor('')).toEqual('nope');
    expect(PlayListIdExtractor('https://www.youtube.com/playlist?list=PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8')).toEqual('PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8');
    expect(PlayListIdExtractor('https://www.youtube.com/watch?v=0Z-sG2qLHwc&list=PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8&index=1')).toEqual('PLWhoXtydVppp0XmSupI6CJ74qGcbk4zY8');
  });
});

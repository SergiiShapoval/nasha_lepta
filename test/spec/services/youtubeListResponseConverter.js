'use strict';

describe('Service: YoutubeListResponseConverter', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var YoutubeListResponseConverter, youtubeListResponseJson;
  beforeEach(inject(function (_YoutubeListResponseConverter_) {
    YoutubeListResponseConverter = _YoutubeListResponseConverter_;
    youtubeListResponseJson = readJSON('test/mock/youtube.json');
  }));

  it('should do something', function () {
    expect(YoutubeListResponseConverter).toBeDefined();
    var youtubeListResponseConverterResult = YoutubeListResponseConverter(youtubeListResponseJson);
    expect(youtubeListResponseConverterResult).toBeDefined();
    expect(youtubeListResponseConverterResult[0]).toBeDefined();
    expect(youtubeListResponseConverterResult[0].youtubeId).toEqual('Mwee70dr0V4');
    expect(youtubeListResponseConverterResult[0].publishedAt).toEqual('2016-03-11T19:22:07.000Z');
    expect(youtubeListResponseConverterResult[0].title).toEqual('grunt bower yo install');
    expect(youtubeListResponseConverterResult[0].thumbnailUrl).toEqual('https://i.ytimg.com/vi/Mwee70dr0V4/hqdefault.jpg');
  });

});

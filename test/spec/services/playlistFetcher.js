'use strict';

describe('Service: PlaylistFetcher', function () {

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  //beforeEach(angular.mock.http.init);
  //afterEach(angular.mock.http.reset);

  var $httpBackend, youtubeListResponseJson, fetchResult;

  // instantiate service
  var PlaylistFetcher;
  beforeEach(inject(function (_PlaylistFetcher_, _$httpBackend_) {
    PlaylistFetcher = _PlaylistFetcher_;
    $httpBackend=_$httpBackend_;
    youtubeListResponseJson = readJSON('test/mock/youtube.json');
  }));


  it('PlaylistFetcher should be defined', function () {
    expect(!!PlaylistFetcher).toBe(true);
    expect(PlaylistFetcher('23')).toBeDefined();
  });

  it('PlaylistFetcher should return correct data', function () {
    PlaylistFetcher('PL2qtZEYrb0pKR37JpFr13SRqGoicpHEIT')
      .then(
        function(result){
          fetchResult = result.data;
        }, function(){
          console.log('error in callback');
        });

    $httpBackend.whenGET(/.*?/g)
      .respond(youtubeListResponseJson);

    $httpBackend.flush();

    expect(fetchResult).toBeDefined();
    expect(fetchResult.items).toBeDefined();
    expect(fetchResult.items[0]).toBeDefined();
    expect(fetchResult.items[0].snippet.resourceId.videoId).toEqual('Mwee70dr0V4');
    expect(fetchResult.items[0].snippet.publishedAt).toEqual('2016-03-11T19:22:07.000Z');
    expect(fetchResult.items[0].snippet.title).toEqual('grunt bower yo install');
    expect(fetchResult.items[0].snippet.thumbnails.high.url).toEqual('https://i.ytimg.com/vi/Mwee70dr0V4/hqdefault.jpg');
  });

});

'use strict';

describe('Controller: AlbumsListCtrl', function () {

  // load the controller's module
  beforeEach(module('nashaLeptaApp'));

  var albumFixtures = [{
    id : "album1",
    title : "Заглавие альбома",
    cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
    date : new Date().getTime(),
    picasaLink: "https://picasaweb.google.com/data/feed/base/user/111442129617636727768/albumid/6100601476767132305"

  }, {
    id : "album2",
    title : "Заглавие альбома",
    cover : "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
    date : new Date('2015-06-01').getTime(),
    picasaLink: "https://picasaweb.google.com/data/feed/base/user/111442129617636727768/albumid/6100601476767132305"

  }];

  var AlbumsListCtrl,
    scope,
    FireObjects;

  beforeEach(inject(function (_FireObjects_) {
    FireObjects = _FireObjects_;
    spyOn(FireObjects, "all").and.callFake(function(models) {
      return albumFixtures;
    });
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlbumsListCtrl = $controller('AlbumsListCtrl', {
      $scope: scope
    });
  }));

  it('albums is defined in scope and injected service called', function () {
    expect(FireObjects).toBeDefined();
    expect(FireObjects.all).toHaveBeenCalled();
    expect(scope.albums.length).toBe(2);
  });
});

'use strict';

describe('Factory: FireObjects', function () {

  // load the service's module
  beforeEach(angular.mock.module("nashaLeptaApp"));
  beforeEach(angular.mock.module("nashaLeptaApp", function ($provide) {
    //Attempt to override the FirebaseLink value that gets passed to config
    $provide.constant("FirebaseLink", "https://vivid-fire-8580.firebaseio.com");
  }));
  // instantiate service
  var FireObjects, FirebaseLink, ModelCopier;
  beforeEach(inject(function (_FireObjects_, _FirebaseLink_, _ModelCopier_) {
    FireObjects = _FireObjects_;
    FirebaseLink = _FirebaseLink_;
    ModelCopier = _ModelCopier_;
  }));
  //var originalTimeout;
  //beforeEach(function() {
  //  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  //  jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  //});
  //afterEach(function() {
  //  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  //});
  it('all dependencies are correctly injected', function () {
    expect(!!FireObjects).toBe(true);
    expect(!!FirebaseLink).toBe(true);
    expect(!!ModelCopier).toBe(true);
    expect(FirebaseLink).toEqual("https://vivid-fire-8580.firebaseio.com");

  });
  it('FireObjects methods are defined', function () {
    expect(FireObjects.all).toBeDefined();
    expect(FireObjects.find).toBeDefined();
    expect(FireObjects.update).toBeDefined();
    expect(FireObjects.create).toBeDefined();
  });
  //too long callback, moved to pending
  xit('article1 created successfully', function (done) {
    var article = {
      url : 'article1',
      body : 'article1 body'
    };
    var articlesFireObject = FireObjects.create("articles", "article1");
    ModelCopier(article, articlesFireObject);
    articlesFireObject.$save().then(function(ref) {
      expect(ref.key()).toEqual(articlesFireObject.$id);
      done();
    }, function(error) {
      expect(error).toBeUndefined();
      done();
    });
  });
  //too long callback, moved to pending
  xit('article2 created successfully', function (done) {
    var article = {
      url : 'article2',
      body : 'article2 body'
    };
    var articlesFireObject = FireObjects.create("articles", "article2");
    ModelCopier(article, articlesFireObject);
    articlesFireObject.$save().then(function(ref) {
      expect(ref.key()).toEqual(articlesFireObject.$id);
      done();
    }, function(error) {
      expect(error).toBeUndefined();
      done();
    });
  });
  //too long callback, moved to pending
  xit('article3 created successfully', function (done) {
    var article = {
      url : 'article3',
      body : 'article3 body'
    };
    var articlesFireObject = FireObjects.create("articles", "article3");
    ModelCopier(article, articlesFireObject);
    articlesFireObject.$save().then(function(ref) {
      expect(ref.key()).toEqual(articlesFireObject.$id);
      done();
    }, function(error) {
      expect(error).toBeUndefined();
      done();
    });
  });
  //too long callback, moved to pending
  xit('article1 is retrieved successfully', function (done) {
    var articlesFireObject = FireObjects.find("articles", "article1");
    articlesFireObject.$loaded(function(data) {
        console.log(data === obj); // true
        expect(data.url).toEqual('article1');
        expect(data.body).toEqual('article1 body');
      },
      function(error) {
        expect(error).toBeUndefined();
        console.error("Error:", error);
      })
  });
});

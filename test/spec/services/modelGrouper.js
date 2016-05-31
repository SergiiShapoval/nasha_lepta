'use strict';

describe('Service: modelGrouper', function () {

  var newsFixtures = [
    {
      id: "novelty1",
      summary: "краткое содержание 1 новости",
      cover: "https://lh1.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 1"
    },
    {
      id: "novelty2",
      summary: "краткое содержание 2 новости",
      cover: "https://lh2.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 2"
    },
    {
      id: "novelty3",
      summary: "краткое содержание 3 новости",
      cover: "https://lh3.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 3"
    },
    {
      id: "novelty4",
      summary: "краткое содержание 4 новости",
      cover: "https://lh4.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 4"
    },
    {
      id: "novelty5",
      summary: "краткое содержание 5 новости",
      cover: "https://lh5.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 5"
    },
    {
      id: "novelty6",
      summary: "краткое содержание 6 новости",
      cover: "https://lh6.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 6"
    },
    {
      id: "novelty7",
      summary: "краткое содержание 7 новости",
      cover: "https://lh7.googleusercontent.com/-Tpmm-JpPCH0/VKmwumMSD1I/AAAAAAAAHJ0/54lfCYAfR6Y1Pit_Q8S_SY74uo-DQ6HJQCHM/s912/NCH_5461.jpg",
      date: new Date(),
      body: "Текст новости 7"
    }];

  // load the service's module
  beforeEach(module('nashaLeptaApp'));

  // instantiate service
  var modelGrouper;
  beforeEach(inject(function (_modelGrouper_) {
    modelGrouper = _modelGrouper_;
  }));

  it('modelGrouper defined', function () {
    expect(!!modelGrouper).toBeDefined();
  });

  it('modelGrouper working correctly', function () {
    var groupModelsResult = modelGrouper(newsFixtures, 3);
    expect(groupModelsResult).toBeDefined();
    expect(groupModelsResult.length).toEqual(3);
    expect(groupModelsResult[0].length).toEqual(3);
    expect(groupModelsResult[1].length).toEqual(3);
    expect(groupModelsResult[2].length).toEqual(1);
    expect(groupModelsResult[2][0]).toEqual(newsFixtures[6]);
  });

});

import getNews from "./getNews";

describe("getNews() Util", () => {
  test("Get page 0 data", () => {
    return getNews(0).then((res) => {
      expect(res.page).toBe(0);
    });
  });

  test("Get page 0 data if no page number is passed.", () => {
    return getNews().then((res) => {
      expect(res.page).toBe(0);
    });
  });

  test("Get page 4 data", () => {
    return getNews(4).then((res) => {
      expect(res.page).toBe(4);
    });
  });

  test("Get page 0 data if passed param is not a valid number", () => {
    return getNews('').then((res) => {
      expect(res.page).toBe(0);
    });
  });

//   test('API fails', () => {
//     expect.assertions(1);
//     return getNews(0).catch(e => expect(e).toMatch('error'));
//   });
});

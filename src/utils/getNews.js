import fetch from "isomorphic-fetch";

const getNews = (page) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`
  ).then((res) => res.json());
};

export default getNews;

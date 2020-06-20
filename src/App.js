import React, { useEffect, useState } from "react";

import NewsFeed from "./components/NewsFeed/NewsFeed";
import LineChart from "./components/LineChart/LineChart";
import "./App.css";

function App() {
  const [newsFeed, setNewsFeed] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    getNewsFeed(0);
  }, []);

  useEffect(() => {
    let chartValues = newsFeed.map((value) => {
      let chartVal = {};
      chartVal.id = value.objectID;
      chartVal.votes = value.num_comments;
      return chartVal;
    });

    setChartData(chartValues);
  }, [newsFeed]);

  const getNewsFeed = async (page) => {
    const newsFeedResponse = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`
    );
    if (newsFeedResponse.ok) {
      let jsonData = await newsFeedResponse.json();
      console.log(jsonData);

      setNewsFeed(jsonData.hits);
    }
  };

  const next = (page) => {
    setCurrentPage(page);
    getNewsFeed(page);
  };

  const previous = (page) => {
    setCurrentPage(page);
    getNewsFeed(page);
  };

  const handleHideBtnClick = (data) => {
    console.log(data);
    setNewsFeed(data);
  };

  return (
    <section className="main">
      <NewsFeed
        currentPage={currentPage}
        data={newsFeed}
        next={next}
        previous={previous}
        hideStory={handleHideBtnClick}
      />
      <LineChart data={chartData} />
    </section>
  );
}

export default App;

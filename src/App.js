import React, { useEffect, useState } from "react";

import NewsFeed from "./components/NewsFeed/NewsFeed";
import LineChart from "./components/LineChart/LineChart";

import "./App.css";

function App(props) {
  const [newsFeed, setNewsFeed] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [upvotes, setUpvote] = useState({});
  const [isLoaderVisible, setLoaderVisiblity] = useState(false);

  useEffect(() => {
    console.log("Props", props.data.hits);
    setNewsFeed(props.data.hits);
  }, [props]);

  useEffect(() => {
    getNewsFeed(0);
    let upvotes = localStorage.getItem("upvotes");
    try {
      let parsedJson = JSON.parse(upvotes);
      setUpvote(parsedJson);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    let chartValues = newsFeed.map((value) => {
      let chartVal = {};
      chartVal.id = value.objectID;
      chartVal.votes =
        upvotes && upvotes[value.objectID] ? upvotes[value.objectID] : 0;
      return chartVal;
    });

    setChartData(chartValues);
  }, [newsFeed, upvotes]);

  const getNewsFeed = async (page) => {
    setLoaderVisiblity(true);
    const newsFeedResponse = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`
    );
    if (newsFeedResponse.ok) {
      let jsonData = await newsFeedResponse.json();
      setLoaderVisiblity(false);
      setCurrentPage(page);
      setNewsFeed(jsonData.hits);
    } else {
      setLoaderVisiblity(true);
      setCurrentPage(page);
      setNewsFeed([]);
    }
  };

  const next = () => {
    getNewsFeed(currentPage + 1);
  };

  const previous = () => {
    if (currentPage > 0) {
      getNewsFeed(currentPage - 1);
    }
  };

  const handleHideBtnClick = (data) => {
    setNewsFeed(data);
  };

  const handleUpvote = (data) => {
    setUpvote(data);
  };

  return (
    <section className="main">
      <NewsFeed
        upvotes={upvotes}
        data={newsFeed.length === 0 ? props.data.hits : newsFeed}
        next={next}
        previous={previous}
        hideStory={handleHideBtnClick}
        handleUpvote={handleUpvote}
        currentPage={currentPage}
      />
      {isLoaderVisible && (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      )}
      {props.isLineChartVisible && <LineChart data={chartData} />}
    </section>
  );
}

export default App;

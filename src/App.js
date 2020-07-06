/**
 * This is the root component.
 * Acts as starting point.
 */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import NewsFeed from "./components/NewsFeed/NewsFeed";
import LineChart from "./components/LineChart/LineChart";

import getNews from "./utils/getNews";

import "./App.css";

const App = (props) => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [upvotes, setUpvote] = useState({});
  const [isLoaderVisible, setLoaderVisiblity] = useState(false);
  const [isNewsdataPresent, setNewsdataPresence] = useState(false);

  useEffect(() => {
    if (props.data) {
      setNewsFeed(props.data.hits);
      setNewsdataPresence(true);
    } else {
      setNewsdataPresence(false);
    }
  }, [props]);

  useEffect(() => {
    getNewsFeed(0); //get page 0 data from the API.
    //get upvotes stored in localstorage and the upvote count for each story
    let upvotes = localStorage.getItem("upvotes");
    try {
      let parsedJson = JSON.parse(upvotes);
      if (parsedJson) {
        setUpvote(parsedJson);
      } else {
        setUpvote({});
      }
    } catch (err) {
      console.log("Local Storage: Error while fetching stored upvotes", err);
      setUpvote({});
    }
  }, []);

  //Set the chart data.
  useEffect(() => {
    if (newsFeed && newsFeed.length > 0) {
      let chartValues = newsFeed.map((value) => {
        let chartVal = {};
        chartVal.id = value.objectID;
        chartVal.votes =
          upvotes && upvotes[value.objectID] ? upvotes[value.objectID] : 0;
        return chartVal;
      });

      setChartData(chartValues);
    }
  }, [newsFeed, upvotes]);

  const getNewsFeed = async (page) => {
    setLoaderVisiblity(true);
    getNews(page)
      .then((res) => {
        setLoaderVisiblity(false);
        setCurrentPage(page);
        setNewsFeed(res.hits);
        setNewsdataPresence(true);
      })
      .catch((err) => {
        console.log("NewsFeed: Error while fetching news data", err);
        setLoaderVisiblity(true);
        setCurrentPage(page);
        setNewsFeed([]);
        setNewsdataPresence(false);
      });
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
        upvotes={upvotes ? upvotes : {}}
        data={
          !newsFeed || newsFeed.length === 0
            ? props.data
              ? props.data.hits
              : []
            : newsFeed
        }
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
      {isNewsdataPresent && <LineChart data={chartData} />}
    </section>
  );
};

App.propTypes = {
  data: PropTypes.object,
  isLineChartVisible: PropTypes.bool,
};

App.defaultProps = {
  data: {},
  isLineChartVisible: true,
};

export default App;

/**
 * Root component.
 * @component
 * Initialise view with required components.
 */
import React, { useState, useEffect } from "react";

import "./NewsFeed.css";

const NewsFeed = () => {
  const [newsFeed, setNewsFeed] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoaderVisible, setLoaderVisibility] = useState(false);

  useEffect(() => {
    getNewsFeed(0);
  }, []);

  const getNewsFeed = async (page) => {
    setLoaderVisibility(true);
    const newsFeedResponse = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?page=${page}&tags=story`
    );
    if (newsFeedResponse.ok) {
      let jsonData = await newsFeedResponse.json();
      console.log(jsonData);
      setNewsFeed(jsonData.hits);
      setLoaderVisibility(false);
    }
  };

  const handleHideBtnClick = (e) => {
    let index;
    let newsFeedData = newsFeed;
    for (let i = 0; i < newsFeed.length; i++) {
      if (newsFeed[i].objectID === e.currentTarget.dataset.id) {
        index = i;
        break;
      }
    }

    if (index || index === 0) {
      newsFeedData.splice(index, 1);
      setLoaderVisibility(false);
      setNewsFeed(newsFeedData);
    }
  };

  const handlePrevClick = (e) => {
    if (currentPage > 0) {
      getNewsFeed(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    getNewsFeed(currentPage + 1);
    setCurrentPage(currentPage + 1);
  };

  const handleUpvote = (e) => {
    let currentCount = localStorage.getItem(e.currentTarget.dataset.id);
    if (!currentCount) {
      currentCount = 0;
    }
    localStorage.setItem(
      e.currentTarget.dataset.id,
      parseInt(currentCount) + 1
    );
    console.log(localStorage.getItem(e.currentTarget.dataset.id));
  };

  return (
    <section className="main-container" role="main">
      <table className="news-feed-table">
        <thead>
          <tr className="news-feed-header-row">
            <th className="news-feed-header-item fixed-width center">
              Comments
            </th>
            <th className="news-feed-header-item fixed-width center">
              Vote Count
            </th>
            <th className="news-feed-header-item fixed-width center">Upvote</th>
            <th className="news-feed-header-item left">News Details</th>
          </tr>
        </thead>
        <tbody>
          {!isLoaderVisible &&
            newsFeed.map((value, index) => {
              return (
                value.title && (
                  <tr key={index} className="news-feed-data-row">
                    <td className="news-feed-data-item center">
                      {value.num_comments}
                    </td>
                    <td className="news-feed-data-item center">
                      {localStorage.getItem(value.objectID)
                        ? localStorage.getItem(value.objectID)
                        : 0}
                    </td>
                    <td className="news-feed-data-item center">
                      <button data-id={value.objectID} onClick={handleUpvote}>
                        Upvote
                      </button>
                    </td>
                    <td className="news-feed-data-item left">
                      <h4 className="news-title">{value.title}</h4>
                      <a href={value.url} className="news-link">
                        {"(" + value.url + ")"}
                      </a>
                      <div className="news-author">
                        <span>By</span>
                        <span className="news-author-name">{value.author}</span>
                      </div>
                      <span className="news-last-updated-ts">
                        {value.created_at}
                      </span>
                      <button
                        className="news-hide"
                        data-id={value.objectID}
                        onClick={handleHideBtnClick}
                      >
                        [hide]
                      </button>
                    </td>
                  </tr>
                )
              );
            })}
          {isLoaderVisible && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="btn-wrapper">
        <button className="prev" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </section>
  );
};

export default NewsFeed;

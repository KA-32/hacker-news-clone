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

  const data = [
    {
      author: "leetsquad",
      comment_text:
        "I believe it might just be that we are used to safe incremental building now.<p>For example, building a feature on top of a successful product will get 5% gain with 80% certainty.<p>Building something completely new will give 10x gain with 2% certainty.<p>Management is more likely to favor the 5% gain because it gives safe returns and they can explain it well to whoever they are reporting to.<p>Also, I believe the same applies to startups. A founder has to explain crazy bets to investors, employees and everyone in the company. That&#x27;s notnas easy as it sounds.",
      created_at: "2020-06-19T13:49:42.000Z",
      created_at_i: 1592574582,
      num_comments: null,
      objectID: "23574492",
      parent_id: 23569638,
      points: null,
      story_id: 23569638,
      story_text: null,
      story_title: "On Cultures That Build",
      story_url:
        "https://scholars-stage.blogspot.com/2020/06/on-cultures-that-build.html",
      title: null,
      url: null,
    },
  ];

  useEffect(() => {
    getNewsFeed(0);
    //setNewsFeed(data);
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
    console.log(e.currentTarget.dataset);
    //setNewsFeed(data);
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
                        data-title={value.title}
                        data-index={index}
                        onClick={handleHideBtnClick}
                      >
                        [hide]
                      </button>
                    </td>
                  </tr>
                )
              );
            })}
          {isLoaderVisible && <div>Loading...</div>}
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

/**
 * Root component.
 * @component
 * Initialise view with required components.
 */
import React, { useState } from "react";

import "./NewsFeed.css";

const NewsFeed = (props) => {
  const [currentPage] = useState(props.currentPage);

  const handleHideBtnClick = (e) => {
    let index;
    let newsFeedData = [...props.data];
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].objectID === e.currentTarget.dataset.id) {
        index = i;
        break;
      }
    }

    if (index || index === 0) {
      newsFeedData.splice(index, 1);
      props.hideStory(newsFeedData);
    }
  };

  const handlePrevClick = (e) => {
    if (currentPage > 0) {
      props.previous(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    props.next(currentPage + 1);
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

  const renderRows = () => {
    return props.data.map(function (value, index) {
      return (
        value.title && (
          <tr key={value.objectID} className="news-feed-data-row">
            <td className="news-feed-data-item center">{value.num_comments}</td>
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
              <span className="news-last-updated-ts">{value.created_at}</span>
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
    });
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
          {/* {props.data.map((value, index) => {
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
          })} */}
          {renderRows()}
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

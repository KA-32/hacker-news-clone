/**
 * Root component.
 * @component
 * Initialise view with required components.
 */
import React, { useState, useEffect } from "react";

import upvoteIcon from "../../assets/ic-upvote.png";

import "./NewsFeed.css";

const NewsFeed = (props) => {
  const [upvotes, setUpvote] = useState(props.upvotes);

  useEffect(() => {
    setUpvote(props.upvotes);
  }, [props.upvotes]);

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
    props.previous();
  };

  const handleNextClick = (e) => {
    props.next();
  };

  const handleUpvote = (e) => {
    let upvotesUpdate = { ...upvotes };

    if (
      upvotesUpdate[e.currentTarget.dataset.id] ||
      upvotesUpdate[e.currentTarget.dataset.id] === 0
    ) {
      upvotesUpdate[e.currentTarget.dataset.id]++;
    } else {
      //already initialised with 0. So increment by 1.
      upvotesUpdate[e.currentTarget.dataset.id] = 1;
    }
    setUpvote(upvotesUpdate);
    localStorage.setItem("upvotes", JSON.stringify(upvotesUpdate));
    props.handleUpvote(upvotesUpdate);
    //Store upvotes locally.
  };

  const renderRows = () => {
    return props.data.map(function (value, index) {
      return (
        value.title && (
          <tr key={value.objectID} className="news-feed-data-row">
            <td className="news-feed-data-item center">{value.num_comments}</td>
            <td className="news-feed-data-item center">
              {!upvotes[value.objectID] || upvotes[value.objectID] === 0
                ? 0
                : upvotes[value.objectID]}
            </td>
            <td className="news-feed-data-item center">
              <button
                className="upvote"
                data-id={value.objectID}
                onClick={handleUpvote}
              >
                <img className="upvote-icon" src={upvoteIcon} alt="Upvote" />
              </button>
            </td>
            <td className="news-feed-data-item left">
              <h4 className="news-title">{value.title}</h4>
              <a href={value.url} className="news-link">
                {"(" + (value.url ? value.url : "") + ")"}
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
        <tbody>{renderRows()}</tbody>
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

/**
 * NewsFeed component.
 * @component
 * Initialise view with news data.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import upvoteIcon from "../../assets/ic-upvote.png";

import "./NewsFeed.css";

const NewsFeed = (props) => {
  const [upvotes, setUpvote] = useState(props.upvotes);
  const [hiddenStories, setHiddenStories] = useState([]);

  useEffect(() => {
    let localHiddenStories = localStorage.getItem("hiddenStories");
    try {
      let parsedJson = JSON.parse(localHiddenStories);
      if (parsedJson) {
        setHiddenStories(parsedJson);
      } else {
        setHiddenStories([]);
      }
    } catch (err) {
      setHiddenStories([]);
      console.log(err);
    }
  }, []);

  useEffect(() => {
    setUpvote(props.upvotes);
  }, [props.upvotes]);

  const handleHideBtnClick = (e) => {
    let index;
    let newsFeedData = [...props.data];
    let hiddenStoriesId = hiddenStories ? [...hiddenStories] : [];
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].objectID === e.currentTarget.dataset.id) {
        index = i;
        hiddenStoriesId.push(e.currentTarget.dataset.id);
        break;
      }
    }

    if (index || index === 0) {
      newsFeedData.splice(index, 1);
      props.hideStory(newsFeedData);
      setHiddenStories(hiddenStoriesId);
      localStorage.setItem("hiddenStories", JSON.stringify(hiddenStoriesId));
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
    //Store upvotes in localstorage.
    localStorage.setItem("upvotes", JSON.stringify(upvotesUpdate));
    props.handleUpvote(upvotesUpdate);
  };

  const renderRows = () => {
    return props.data.map(function (value, index) {
      return (
        value.title &&
        !hiddenStories.includes(value.objectID.toString()) && (
          <tr key={value.objectID} className="news-feed-data-row">
            <td className="news-feed-data-item center">{value.num_comments}</td>
            <td className="news-feed-data-item center">
              {upvotes
                ? !upvotes[value.objectID] || upvotes[value.objectID] === 0
                  ? 0
                  : upvotes[value.objectID]
                : 0}
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
            <td className="news-feed-data-item left-align">
              <div className="news-feed-details-wrapper">
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
              </div>
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
            <th className="news-feed-header-item left-align">News Details</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <div className="btn-wrapper">
        <button
          className="prev"
          disabled={props.currentPage === 0}
          onClick={handlePrevClick}
        >
          Previous
        </button>
        <button className="next" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </section>
  );
};

NewsFeed.propTypes = {
  upvotes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  hideStory: PropTypes.func.isRequired,
  handleUpvote: PropTypes.func.isRequired,
};

NewsFeed.defaultProps = {
  upvotes: {},
  data: [],
  currentPage: 0,
};

export default NewsFeed;

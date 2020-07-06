import React from "react";
import { render } from "@testing-library/react";
import NewsFeed from "./NewsFeed";

describe("NewsFeed component", () => {
  test("previous button should be disabled if on page 0", () => {
    const { getByText } = render(
      <NewsFeed
        upvotes={{}}
        data={[]}
        next={() => {}}
        previous={() => {}}
        hideStory={() => {}}
        handleUpvote={() => {}}
        currentPage={0}
      />
    );
    const prevElement = getByText(/Previous/i);
    expect(prevElement).toBeInTheDocument();
    expect(prevElement.getAttribute('disabled')).toBe("");
  });

  test("previous button should be enabled if on page > 0 ", () => {
    const { getByText } = render(
      <NewsFeed
        upvotes={{}}
        data={[]}
        next={() => {}}
        previous={() => {}}
        hideStory={() => {}}
        handleUpvote={() => {}}
        currentPage={1}
      />
    );
    const prevElement = getByText(/Previous/i);
    expect(prevElement).toBeInTheDocument();
    expect(prevElement.getAttribute('disabled')).not.toBe("");
  });

  test("next button should always be enabled", () => {
    const { getByText } = render(
      <NewsFeed
        upvotes={{}}
        data={[]}
        next={() => {}}
        previous={() => {}}
        hideStory={() => {}}
        handleUpvote={() => {}}
        currentPage={0}
      />
    );
    const prevElement = getByText(/Next/i);
    expect(prevElement).toBeInTheDocument();
    expect(prevElement.getAttribute('disabled')).toBe(null);
  });

  test("NewsFeed to match snapshot", () => {
    const newsFeed = render(
      <NewsFeed
        upvotes={{}}
        data={[]}
        next={() => {}}
        previous={() => {}}
        hideStory={() => {}}
        handleUpvote={() => {}}
        currentPage={0}
      />
    );
    expect(newsFeed).toMatchSnapshot();
  });
});

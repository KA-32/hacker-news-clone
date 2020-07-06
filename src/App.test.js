import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("App renders correct table headers", () => {
    const { getByText } = render(<App data={{}} isLineChartVisible={true} />);
    const commentsElement = getByText(/Comments/i);
    const voteCountElement = getByText(/Vote Count/i);
    const upvoteElement = getByText(/Upvote/i);
    const detailsElement = getByText(/News Details/i);

    expect(commentsElement).toBeInTheDocument();
    expect(voteCountElement).toBeInTheDocument();
    expect(upvoteElement).toBeInTheDocument();
    expect(detailsElement).toBeInTheDocument();
  });

  test("App to match snapshot", () => {
    const app = render(<App data={{}} isLineChartVisible={true} />);
    expect(app).toMatchSnapshot();
  });
});

import React, { useState } from "react";

import NewsFeed from "./components/NewsFeed/NewsFeed";
import LineChart from "./components/LineChart/LineChart";
import "./App.css";

function App() {
  const [chartData, setChartData] = useState([]);

  const handleData = (data) => {
    let chartValues = data.map((value) => {
      let chartVal = {};
      chartVal.id = value.objectID;
      chartVal.votes = value.num_comments;
      return chartVal;
    });
    setChartData(chartValues);
  };

  return (
    <section className="main">
      <NewsFeed handleData={handleData} />
      <LineChart data={chartData} />
    </section>
  );
}

export default App;

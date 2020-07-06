/**
 * Hydrate react component. 
 */
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./App";

import * as serviceWorker from "./serviceWorker";
import getNews from "./utils/getNews";

//Get First page of news data.
getNews(0)
  .then((res) => {
    ReactDOM.hydrate(
      <React.StrictMode>
        <App data={res} isLineChartVisible={true} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.log("Error", err);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

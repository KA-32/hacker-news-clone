import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import ReactDOMServer from "react-dom/server";

import getNews from "../src/utils/getNews";

import App from "../src/App";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.static("./build"));
app.enable("trust proxy");

app.use(function (req, res, next) {
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    // request was via http, so redirect to https
    res.redirect("https://" + req.headers.host + req.url);
  }
});

app.get("/*", (req, res) => {
  const indexFile = path.resolve("./build/index.html");
  getNews(0).then((response) => {
    const app = ReactDOMServer.renderToNodeStream(<App data={response} isLineChartVisible = {false}/>);
    fs.readFile(indexFile, "utf8", (err, data) => {
      if (err) {
        console.error("Something went wrong:", err);
        return res.status(500).send("Internal Server error!!");
      }

      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  }).catch((err)=>{
    console.log(err);
    return res.status(500).send("Internal Server error!!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

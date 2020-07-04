import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = process.env.PORT || 3006;
const app = express();
app.use(helmet());
app.use(express.static("./build"));
app.use(compression());
app.enable('trust proxy'); 

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
  const app = ReactDOMServer.renderToNodeStream(<App />);

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    res.set("Content-Encoding", "gzip");
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});

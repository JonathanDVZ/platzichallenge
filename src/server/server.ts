import express from "express";
import fs from "fs";
import path from "path";
import axios from "axios";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use("/", express.static(path.join(__dirname, "static")));

const manifest = fs.readFileSync(
  path.join(__dirname, "static/manifest.json"),
  "utf-8"
);
const assets = JSON.parse(manifest);

server.get("/", (req, res) => {
  const component = ReactDOMServer.renderToString(React.createElement(App));
  res.render("client", { assets, component });
});

server.get("/api/characters", async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://apisimpsons.fly.dev/api/personajes?limit=650"
    );
    res.json(response.data);
  } catch (err) {
    next(err);
  }
});

server.listen(3000, () =>
  console.log(`Server running on http://localhost:3000`)
);

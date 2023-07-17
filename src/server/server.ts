import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchPath } from 'react-router-dom';
import EntryServer from '../client/EntryServer';
import routes from '../client/routes/routes';
import type { Route } from '../client/routes/routes';

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use('/', express.static(path.join(__dirname, 'static')));

server.get('/api/characters', async (req, res, next) => {
  try {
    const response = await axios.get('https://apisimpsons.fly.dev/api/personajes?limit=650');
    res.json(response.data);
  } catch (err) {
    next(err);
  }
});

const manifest = fs.readFileSync(path.join(__dirname, 'static/manifest.json'), 'utf-8');
const assets = JSON.parse(manifest);

server.get('*', (req, res) => {
  // Check if any of the routes matched the request URL
  const match = routes.find((route: Route) => matchPath(req.url, route.path)) || {};

  // If a route matched, set the status code to 200
  if (match) {
    res.status(200);
  }

  const component = ReactDOMServer.renderToString(React.createElement(EntryServer, req.url));
  res.render('client', { assets, component });
});

server.listen(8000, () => console.log(`Server running on http://localhost:8000`));

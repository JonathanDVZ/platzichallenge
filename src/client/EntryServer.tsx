import * as React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

const EntryServer: React.FC<string> = (url) => (
  <React.StrictMode>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </React.StrictMode>
);

export default EntryServer;

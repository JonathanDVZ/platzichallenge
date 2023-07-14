import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import CharacterProvider from "./context/CharacterProvider";
import routes from "./routes/routes";
import type { Route as RouteType } from "../client/routes/routes";
import Navbar from "./components/organisms/Navbar";
import "./assets/styles/main.scss";

const App: React.FC = () => (
  <CharacterProvider>
    <Navbar />
    <Routes>
      <Route path="/">
        {routes.map(({ path, component: C, index }: RouteType) => (
          <Route key={path} index={index} path={path} element={<C />} />
        ))}
      </Route>
    </Routes>
  </CharacterProvider>
);

export default App;

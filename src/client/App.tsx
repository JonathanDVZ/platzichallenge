import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CharactersProvider from './context/characters/CharactersProvider';
import ThemeProvider from './context/theme/ThemeProvider';
import routes from './routes/routes';
import type { Route as RouteType } from '../client/routes/routes';
import Navbar from './components/organisms/Navbar';
import './assets/styles/main.scss';

const App: React.FC = () => (
  <CharactersProvider>
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/">
          {routes.map(({ path, component: C, index }: RouteType) => (
            <Route key={path} index={index} path={path} element={<C />} />
          ))}
        </Route>
      </Routes>
    </ThemeProvider>
  </CharactersProvider>
);

export default App;

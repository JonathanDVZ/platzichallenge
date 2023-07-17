import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '../../context/theme/ThemeContext';
import { toggleTheme } from '../../context/theme/ThemeActions';
import { Theme } from './../../types/ThemeContext';
import ButtonWithIcon from '../atoms/ButtonWithIcon';
import SwitchIcon from '../molecules/SwitchIcon';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const {
    state: { theme },
    dispatch
  } = useContext(ThemeContext);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.add('ptz-dark-mode');
    } else {
      document.body.classList.remove('ptz-dark-mode');
    }
  }, [theme]);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  const linkHandler = () => {
    setClicked(false);
  };

  return (
    <nav className="ptz-navbar">
      <div className="ptz-navbar__header">
        <h1 className="ptz-navbar__title">The Simpsons characters</h1>
      </div>

      <div className="ptz-navbar__actions-container">
        <ButtonWithIcon
          className="ptz-navbar__darkmode-btn"
          type="submit"
          aria-label="search"
          iconComponent={<SwitchIcon themeSelected={theme} />}
          onClick={() => toggleTheme(dispatch)}
        />
        <ButtonWithIcon
          className={`ptz-navbar__btn ${clicked && 'ptz-navbar__btn--clicked'}`}
          aria-label="btn-menu"
          onClick={clickHandler}
          iconComponent={
            <label htmlFor="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          }
        />
        <div
          className={`ptz-navbar__links-container ${
            clicked ? 'ptz-navbar__links-container--open' : ''
          }`}
        >
          <Link to="/" id="home-link" className="ptz-navbar__link" onClick={linkHandler}>
            Home
          </Link>
          <Link
            to="/favorites"
            id="favorite-link"
            className="ptz-navbar__link"
            onClick={linkHandler}
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

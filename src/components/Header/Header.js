import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Logo from './Logo';
import BurgerMenu from './BurgerMenu';
import HomeIcon from './HomeIcon';
import ShoppingCartIcon from './ShoppingCartIcon';
import FlyoutMenu from './FlyoutMenu';
import './Header.css';

const Header = ({ siteTitle, location }) => {
  const [showFlyout, setShowFlyout] = useState(false);

  const toggleFlyout = () => setShowFlyout(!showFlyout);

  const navLinks = [
    { icon: <HomeIcon location={location} />, name: 'Home', path: '/' },
    { icon: null, name: 'Contact', path: '/contact' },
    { icon: null, name: 'Blog', path: '/articles' },
    {
      icon: <ShoppingCartIcon location={location} />,
      name: 'Cart',
      path: '/cart',
    },
  ].map(({ icon, name, path }) => (
    <li key={name}>
      <AniLink
        activeClassName="active"
        fade="true"
        duration={0.25}
        to={path}
        className="header__nav-links"
      >
        {icon ? icon : name}
      </AniLink>
    </li>
  ));

  return (
    <header className="header">
      <h1 className="cinzel header__title">
        <Logo />
        <AniLink
          fade="true"
          duration={0.3}
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </AniLink>
      </h1>
      <nav className="expanded-nav nav">
        <ul className="header__nav-list ul-reset">{navLinks}</ul>
      </nav>
      <button
        className="burger-menu"
        aria-label="Toggle Navigation Menu"
        type="button"
        onClick={toggleFlyout}
      >
        <BurgerMenu />
      </button>
      {showFlyout && (
        <FlyoutMenu setShowFlyout={setShowFlyout}>
          <ul className="ul-reset">{navLinks}</ul>
        </FlyoutMenu>
      )}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

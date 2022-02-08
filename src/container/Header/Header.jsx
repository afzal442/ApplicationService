import React from 'react';

import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding app__bg" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1" style={{ color: 'darkgreen' }}>The TajMahal Restaurant</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', color: 'yellow' }}>Welcome to our Restuarant, we provide you as much as you wish in your mind, but not as you demand.:)</p>
      <button type="button" className="custom__button"><a href="#menu">Explore Menu</a></button>
    </div>
  </div>
);

export default Header;

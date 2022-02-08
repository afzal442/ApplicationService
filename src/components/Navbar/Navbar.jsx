import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <p className="p__opensans"><a href="/" style={{ color: 'var(--color-golden)' }}>The Taj Mahal</a></p>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="/" style={{ color: 'var(--color-golden)' }}>Home</a></li>
        <li className="p__opensans"><a href="/about">About</a></li>
        <li className="p__opensans"><a href="/menu" style={{ color: 'var(--color-golden)' }}>Menu</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        {/* <a href="#login" className="p__opensans">Login</a> */}
        <li className="p__opensans"><a href="#contact" className="p__opensans">Book Order</a></li>
        <li className="p__opensans"><a href="/food-recipe" style={{ color: 'var(--color-golden)' }}>Look out our Food Recipe!</a></li>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="/menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Book Order</a></li>
              <li><a href="/food-recipe" onClick={() => setToggleMenu(false)}>Look out our Food Recipe!</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

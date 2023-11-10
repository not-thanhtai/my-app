import React, { useEffect, useState } from 'react';
import './styles.scss'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = (props) => {
  const [navActive, setNavActive] = useState(false);

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo--text">
        <p>not-thanhtai</p>
      </div>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Home"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyContact"
              className="navbar--content"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active--content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="CallMe"
        className="btn btn-outline-primary"
      >
        Book a Call
      </Link>
    </nav>
  )
};

export default NavBar;

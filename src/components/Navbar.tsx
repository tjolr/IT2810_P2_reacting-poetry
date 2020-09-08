import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import '../ColorPalette.css';
import '../Container.css';

const Navbar = () => {
  return (
    <div className="bg-primary-3 Navbar-container General-container">
      <div>
        <span className="Navbar-title">Navbar</span>
      </div>
      <div>
        <Link className="Navbar-navlink" to="/gallery">
          Gallery
        </Link>
        <Link className="Navbar-navlink" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

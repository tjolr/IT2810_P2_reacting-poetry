import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../ColorPalette.css';
import '../Container.css';
import GlobalLangContext, { translations } from '../utills/GlobalLangContext';

const Navbar = (props) => {
  const lang = useContext(GlobalLangContext);

  const handleToggleLang = () => {
    props.onLangToggle();
  };

  return (
    <div className="bg-primary-3 Navbar-container General-container">
      <div>
        <span className="Navbar-title">Reacting poetries</span>
      </div>
      <div>
        <Link className="Navbar-navlink" to="/gallery">
          {translations[lang].gallery}
        </Link>
        <Link className="Navbar-navlink" to="/">
          {translations[lang].home}
        </Link>
        <span onClick={handleToggleLang} className="Navbar-lang-btn">
          <i className="fas fa-globe"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

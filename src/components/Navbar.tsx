import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../ColorPalette.css';
import '../Container.css';
import GlobalLangContext, { translations } from '../utills/GlobalLangContext';

const Navbar = (props) => {
  const lang = useContext(GlobalLangContext);

  // Callback funksjon som kaller parent component sin onLangToggle for å endre language state
  const handleToggleLang = () => {
    props.onLangToggle();
  };

  return (
    /* Bruker generell container og egen navbar container */
    <div className="bg-primary-3 Navbar-container General-container">
      <div>
        <span className="Navbar-title">Reacting poetries</span>
      </div>
      <div>
        {/* Linker som sender til angitt adresse i Router som står i parent */}
        <Link className="Navbar-navlink" to="/gallery">
          {translations[lang].gallery}
        </Link>
        <Link className="Navbar-navlink" to="/">
          {translations[lang].home}
        </Link>
        {/* Globus-ikon for å endre valgt språk på siden */}
        <span onClick={handleToggleLang} className="Navbar-lang-btn">
          <i className="fas fa-globe"></i>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

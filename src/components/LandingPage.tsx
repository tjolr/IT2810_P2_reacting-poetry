import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import '../ColorPalette.css';
import GlobalLangContext, { translations } from '../utills/GlobalLangContext';

const LandingPage = () => {
  const lang = useContext(GlobalLangContext);
  return (
    <div className="LandingPage-container">
      <div className="LandingPage-header">
        <h1>{translations[lang].welcomeText}&nbsp;</h1>
        <h1>Reacting poetry</h1>
      </div>
      <div className="LandingPage-button-container">
        <Link to="/gallery">
          <button className="LandingPage-button">
            {translations[lang].toGallery}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

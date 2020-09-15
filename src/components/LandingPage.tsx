import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import "../ColorPalette.css";

const LandingPage = () => {
  return (
    <div className="LandingPage-container">
      <div className="LandingPage-header">
        <h1>Welcome to&nbsp;</h1>
        <h1>reacting poetry</h1>
      </div>
      <div className="LandingPage-button-container">
        <Link to="/gallery">
          <button className="LandingPage-button">To gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

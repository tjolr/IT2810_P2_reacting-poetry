import React from "react";
import "./Footer.css";
import "../ColorPalette.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer-container bg-primary-1">
        <h2 className="Footer-header">IT2810 Webutvikling prosjekt 2</h2>
        <p className="Footer-text-top">Created by Balluni & Anesh</p>
        <p className="Footer-text-bottom">
          <a
            href="https://gitlab.stud.idi.ntnu.no/it2810-h20/team-58/reacting-poetry"
            className="Footer-link"
          >
            GitLab repository
          </a>
        </p>
      </div>
    );
  }
}

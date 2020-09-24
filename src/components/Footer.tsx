import React from 'react';
import './Footer.css';
import '../ColorPalette.css';
import GlobalLangContext, { translations } from '../utills/GlobalLangContext';

/* Footer er vår eneste Class-Component! */
export default class Footer extends React.Component {
  /* Setter contextType */
  static contextType = GlobalLangContext;

  render() {
    return (
      <div className="Footer-container bg-primary-1">
        <h2 className="Footer-header">
          {/* Bruker this.context for å hente riktig språk fra globalLangContex */}
          IT2810 Webutvikling {translations[this.context].project} 2
        </h2>
        <p className="Footer-text-top">
          {translations[this.context].createdBy} Balluni & Anesh
        </p>
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

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GalleryPage from './components/GalleryPage';
import GlobalLangContext from './utills/GlobalLangContext';
import { Languages } from './utills/GalleryTheme';
import { useWebStorage, StorageType } from './utills/WebStorage';

const App = () => {
  /* Setter valgt språk til å lagres som LocalStorage slik at 
  språk blir husket neste gang man bruker samme enhet
  Settes til engelsk som default */
  const [currentLang, setCurrentLang] = useWebStorage(
    'language',
    Languages.EN,
    StorageType.LocalStorage
  );

  const onLangToggle = () => {
    /* Bytter valgt språk mellom engelsk og norsk */
    setCurrentLang(currentLang === Languages.EN ? Languages.NO : Languages.EN);
  };

  return (
    <div className="App-container">
      {/* GlobalLangContext provier sender verdien til alle barn dypt ned i treet. */}
      <GlobalLangContext.Provider value={currentLang}>
        <Router>
          {/* Sender callback funksjon til navbar, som får lov til å kalle onLangToggle i denne komponenten */}
          <Navbar onLangToggle={onLangToggle} />
          <div className="App-content">
            <Switch>
              {/* Definerer hvilke kompnenter som skal rendres ved de ulike rutene */}
              <Route path="/gallery">
                <GalleryPage />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </div>
        </Router>
        <div className="App-footer">
          <Footer />
        </div>
      </GlobalLangContext.Provider>
    </div>
  );
};

export default App;

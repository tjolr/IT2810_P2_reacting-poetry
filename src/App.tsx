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
  const [currentLang, setCurrentLang] = useWebStorage(
    'language',
    Languages.EN,
    StorageType.LocalStorage
  );

  const onLangToggle = () => {
    setCurrentLang(currentLang === Languages.EN ? Languages.NO : Languages.EN);
  };

  return (
    <div className="App-container">
      <GlobalLangContext.Provider value={currentLang}>
        <Router>
          <Navbar onLangToggle={onLangToggle} />
          <div className="App-content">
            <Switch>
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

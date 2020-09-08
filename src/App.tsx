import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App-container">
      <Router>
        <Navbar />
        <div className="App-content">
          <Switch>
            <Route path="/gallery">
              <div>gallery</div>
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
    </div>
  );
}

export default App;

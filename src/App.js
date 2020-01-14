import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import HeaderComponent from './components/headerComponent';
import GamesPage from './pages/gamesPage';
import FooterComponent from './components/footerComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/games" component={GamesPage} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;

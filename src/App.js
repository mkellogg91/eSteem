import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';
import HeaderComponent from './components/headerComponent';
import GamesPage from './pages/gamesPage';
import FooterComponent from './components/footerComponent';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import GameDetailsPage from './pages/gameDetailsPage';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={GamesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/gamedetails" component={GameDetailsPage} />
      </Switch>
      <FooterComponent />
    </div>
  );
}

export default App;

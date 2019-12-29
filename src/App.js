import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import HomePage from './pages/homePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;

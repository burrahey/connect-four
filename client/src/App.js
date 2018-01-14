import React, { Component } from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Game } from './containers/Game';
import { Intro } from './containers/Intro';
import { Scoreboard } from './containers/Scoreboard';
import NavBar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
        <div>
        <header className="App-header">
          <h1 className="App-title">Connect Four</h1>
          <div><NavBar /></div>
        </header>
            <Route exact path="/" component={Intro} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/scoreboard" component={Scoreboard} />
          </div>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

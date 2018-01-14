import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch, NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
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
          <NavBar />
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

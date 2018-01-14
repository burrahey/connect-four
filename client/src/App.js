import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Game} from './containers/Game';
import {Intro} from './containers/Intro';
import {Scoreboard} from './containers/Scoreboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Connect Four</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Router>
          <div>
            <Route path="/" component={Intro} />
            <Route path="/game" component={Game} />
            <Route path="/scoreboard" component={Scoreboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

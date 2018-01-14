import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class staticGame extends Component {

  constructor(){
    super();

    this.state={
      player1:"", player2:"", gameState:[]
    }
  }

  render() {
    return (
      <div className="App">
        Game
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {...state.game};
}

export const Game = connect(mapStateToProps)(staticGame);

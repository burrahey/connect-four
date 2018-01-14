import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Players from '../components/Players'
import Gameboard from '../components/Gameboard'

class staticGame extends Component {

  constructor(){
    super();

    this.state={
      player1:"", player2:"", gameState:[]
    }
  }

  render() {
    return (
      <div>
        <Players player1={this.props.player1} player2={this.props.player2} />
        <Gameboard gameState={this.props.gameState}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.game};
}

export const Game = connect(mapStateToProps)(staticGame);

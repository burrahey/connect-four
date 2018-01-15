import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Players from '../components/Players'
import {Gameboard} from '../components/Gameboard';
import { updateBoard, saveGame, pullGame, resetGame } from '../actions/gameActions'

class staticGame extends Component {

  constructor(){
    super();

    this.state={
      player1:"", player2:"", gameState:[], turn: 1, saved: false, gameOver: false
    }
  }

  handleOnClick = (event) => {
    if(!this.props.gameOver){
      this.props.updateBoard(event.target.id, this.props.turn)
    }
  }

  componentDidUpdate(){
    if(!this.props.saved && this.props.gameOver){
      this.props.saveGame(this.props.gameOver, this.props.gameState, this.props.player1, this.props.player2);
    }
  }

  render() {
    return (
      <div>
        <Players turn={this.props.turn} player1={this.props.player1} player2={this.props.player2} gameOver={this.props.gameOver} />
        <Gameboard gameState={this.props.gameState} handleOnClick={this.handleOnClick}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state.game};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateBoard: updateBoard,
    saveGame: saveGame,
    pullGame: pullGame,
    resetGame: resetGame
  }, dispatch);
};

export const Game = connect(mapStateToProps, mapDispatchToProps)(staticGame);

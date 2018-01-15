import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Players from '../components/Players'
import {Gameboard} from '../components/Gameboard';
import { updateBoard, saveGame } from '../actions/gameActions'

class staticGame extends Component {

  constructor(){
    super();

    this.state={
      player1:"", player2:"", gameState:[], turn: 1
    }
  }

  handleOnClick = (event) => {
    if(!this.props.winner){
      this.props.updateBoard(event.target.id, this.props.turn)
    }
  }

  componentDidUpdate(){
    debugger;
    if(this.props.winner){
      this.props.saveGame(this.props.winner);
    }
  }

  render() {
    return (
      <div>
        <Players turn={this.props.turn} player1={this.props.player1} player2={this.props.player2} winner={this.props.winner} />
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
    saveGame: saveGame
  }, dispatch);
};

export const Game = connect(mapStateToProps, mapDispatchToProps)(staticGame);

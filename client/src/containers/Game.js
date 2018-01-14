import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Players from '../components/Players'
import {Gameboard} from '../components/Gameboard';
import {updateBoard} from '../actions/gameActions'

class staticGame extends Component {

  constructor(){
    super();

    this.state={
      player1:"", player2:"", gameState:[], turn: 1
    }
  }

  handleOnClick = (event) => {
    this.props.updateBoard(event.target.id, this.state.turn)
  }

  render() {
    return (
      <div>
        <Players player1={this.props.player1} player2={this.props.player2} />
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
    updateBoard: updateBoard
  }, dispatch);
};

export const Game = connect(mapStateToProps, mapDispatchToProps)(staticGame);

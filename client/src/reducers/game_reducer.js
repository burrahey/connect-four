import React, { Component } from 'react';
import updateTurnAndCheckBoard from '../BoardCheckingFunctions';

const defaultGame = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

const gameReducer = function(state={player1: "Player 1", player2: "Player 2", gameState: defaultGame, turn: 1, gameOver: false}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    case 'UPDATE_BOARD':
      return updateTurnAndCheckBoard(state, action);
    case 'SAVE_GAME':
      return state;
    default:
      return state;
  }
}

export default gameReducer;

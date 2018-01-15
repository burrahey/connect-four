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

const gameReducer = function(state={player1: "Player 1", player2: "Player 2", gameState: defaultGame, turn: 1, gameOver: false, saved: false}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    case 'UPDATE_BOARD':
      return updateTurnAndCheckBoard(state, action);
    case 'SAVE_GAME':
      return state;
    case 'LOAD_EXISTING_GAME':
      let winner = "TIE";

      if(action.game.winner === action.game.player1){
        winner = 1
      } else if(action.game.winner === action.game.player2){
        winner = 2;
      }

      return {player1: action.game.player1, player2: action.game.player2, gameState: action.game.state, gameOver: winner, saved: action.game.id};
    case 'RESET_GAME':
      let newGame = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ];
      return {player1: "Player 1", player2: "Player 2", gameState: newGame, turn: 1, gameOver: false, saved: false}
    default:
      return state;
  }
}

export default gameReducer;

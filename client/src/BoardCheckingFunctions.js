import React from 'react';

const maxLength = 6;

const checkWinner = function(gameState, row, column, player){

  //checking horizontals
  for(let i = 0; i < 4; i++){
    if(gameState[row][column + i - 3] === gameState[row][column + i - 2] && gameState[row][column + i - 2] === gameState[row][column + i - 1] && gameState[row][column + i - 1] === gameState[row][column + i - 0]){
      console.log("win horizontal row: " + row)
      return true;
    }
  }

  //checking diagonals
  for(let i = 0; i < 4; i++){
    if(((row + i - 3) >= 0) && ((row + i) < maxLength)){
      //left to right
      if(gameState[row + i][column - i] === gameState[row + i - 1][column - i + 1] && gameState[row + i - 1][column - i + 1] === gameState[row + i - 2][column -i + 2] && gameState[row + i - 2][column - i + 2] === gameState[row + i - 3][column - i+ 3]){
        console.log("diagonal win left to right row:" + row + " column: " + column + " i: " + i)
        return true;
      } else if(gameState[row + i][column + i] === gameState[row + i - 1][column + i - 1] && gameState[row + i - 1][column + i - 1] === gameState[row + i - 2][column + i - 2] && gameState[row + i - 2][column + i - 2] === gameState[row + i - 3][column + i - 3]){
        //right to left
        console.log("diagonal win right to left row:" + row + " column: " + column + " i: " + i)
        return true;
      }
    }
  }

  // checking vertical wins
  if(row < 3){
   if(gameState[row][column] === gameState[row+1][column] && gameState[row+1][column] === gameState[row+2][column] && gameState[row+2][column] === gameState[row+3][column]){
     console.log("win vertical: " + column)
     return true
   }
 }

  return false;
}

const isNonEmpty = function(cell) {
  cell !== 0
}


const checkTie = function(gameState){
  if(gameState[0].every(isNonEmpty)){
    console.log("tie")
    return true
  } else {
    return false
  }
}


const updateTurn = function(turn){
  if(turn === 1){
    return 2;
  } else {
    return 1;
  }
}

const updateTurnAndCheckBoard = function(state, action){
  let newGameState = [...state.gameState];
  let column = +action.column;
  let newTurn = state.turn
  let gameOverValue = false;

  for(let row = 5; row >= 0; row--){
    if(newGameState[row][column] === 0){
      newGameState[row][column] = action.player;
      if(checkWinner(newGameState, row, column, action.player)){
        gameOverValue = action.player;
      } else if(checkTie(newGameState)){
        gameOverValue = "Tie Game";
      } else {
        newTurn = updateTurn(state.turn)
      }
      break;
    }
  }

  return Object.assign({},state, {gameState: newGameState}, {turn: newTurn}, {gameOver: gameOverValue})
}

export default updateTurnAndCheckBoard;

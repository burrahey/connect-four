const defaultGame = [
  [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  [undefined,undefined,undefined,undefined,undefined,undefined,undefined],
  [undefined,undefined,undefined,undefined,undefined,undefined,undefined]
];

const maxRowLength = 7;

const checkWinner = function(gameState, row, column, player){
  let winSum = player * 4;
  let maxLength = 6;

  //checking horizontals
  for(let i = 0; i < 4; i++){
    if(gameState[row][column + i - 3] + gameState[row][column + i - 2] + gameState[row][column + i - 1] + gameState[row][column + i - 0] === winSum){
      console.log("win horizontal row: " + row)
      return true;
    }
  }

  //checking diagonals
  for(let i = 0; i < 4; i++){
    if((row - i >= 0 )&& (row - i + 3 < maxLength)){
      //left to right
      if(gameState[row - i][column] + gameState[row - i + 1][column + 1] + gameState[row - i + 2][column + 2] + gameState[row - i + 3][column + 3] === winSum){
        console.log("diagonal win left to right" + row)
        return true;
      } else if(gameState[row - i][column] + gameState[row - i + 1][column - 1] + gameState[row - i + 2][column - 2] + gameState[row - i + 3][column - 3] === winSum){
        //right to left
        console.log("diagonal win right to left" + row)
        return true;

      }
    }
  }

  // checking vertical wins
  if(row < 3){
   if(gameState[row][column] + gameState[row+1][column] + gameState[row+2][column] + gameState[row+3][column] === winSum){
     console.log("win vertical: " + column)
     return true
   }
 }

  return false;
}

const checkTie = function(gameState){
  //check to see if the top row is filled
  if(gameState[0].reduce((a, b) => a + b, 0) > 6){
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

const gameReducer = function(state={player1: "Archana", player2: "Billu", gameState: defaultGame, turn: 1, winner: false}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    case 'UPDATE_BOARD':
      let newGameState = [...state.gameState];
      let column = +action.column;
      let newTurn = state.turn
      let newWinner = false;

      for(let row = 5; row >= 0; row--){
        if(newGameState[row][column] === undefined){
          newGameState[row][column] = action.player;
          if(checkWinner(newGameState, row, column, action.player)){
            newWinner = action.player;
          } else if(checkTie(newGameState)){
            newWinner = "Tie Game";
          } else {
            newTurn = updateTurn(state.turn)
          }
          break;
        }
      }

      return Object.assign({},state, {gameState: newGameState}, {turn: newTurn}, {winner: newWinner})
    case 'SAVE_GAME':
      return state;
    default:
      return state;
  }
}

export default gameReducer;

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
  let winSum = player * 4
  for(let i = 0; i < 4; i++){
    // checking horizontals
    if(gameState[row][column + i - 3] + gameState[row][column + i - 2] + gameState[row][column + i - 1] + gameState[row][column + i - 0] === winSum){
      console.log("win horizontal row: " + row)
      return true
    } else if(row < 3){
      // checking vertical wins
      if(gameState[row][column] + gameState[row+1][column] + gameState[row+2][column] + gameState[row+3][column] === winSum){
        console.log("win vertical: " + column)
        return true
      }
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

      for(let row = 5; row >= 0; row--){
        if(newGameState[row][column] === undefined){
          newGameState[row][column] = action.player;
          if(checkWinner(newGameState, row, column, action.player) || checkTie(newGameState)){
            debugger;
          } else {
            newTurn = updateTurn(state.turn)
          }

          break;
        }
      }

      return Object.assign({},state, {gameState: newGameState}, {turn: newTurn})
    default:
      return state;
  }
}

export default gameReducer;

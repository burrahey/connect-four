const defaultGame = [
  [-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1],
  [-1,-1,-1,-1,-1,-1,-1]
];

const maxRowLength = 7;

const gameReducer = function(state={player1: "Archana", player2: "Billu", gameState: defaultGame, turn: 1, winner: false}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    case 'UPDATE_BOARD':
      let newGameState = [...state.gameState];
      let newTurn;
      let column = action.column;

      for(let row = 5; row > -1; row--){
        if(newGameState[row][column] === -1){
          newGameState[row][column] = action.player;
          if(state.turn === 1){
            newTurn = 2;
          } else {
            newTurn = 1;
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

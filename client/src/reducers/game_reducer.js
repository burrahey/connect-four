const defaultGame = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
];

const gameReducer = function(state={player1: "Archana", player2: "Billu", gameState: defaultGame, turn: 1}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    case 'UPDATE_BOARD':
      let newGameState = [...state.gameState];
      let newTurn;

      for(let i = 6; i > -1; i--){
        if(newGameState[i][action.column] === 0){
          newGameState[i][action.column] = action.player;
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

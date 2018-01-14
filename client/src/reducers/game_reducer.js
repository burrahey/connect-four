const gameReducer = function(state={player1: "Archana", player2: "Billu", gameState: defaultGame}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    default:
      return state;
  }
}

export default gameReducer;

const defaultGame = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
]

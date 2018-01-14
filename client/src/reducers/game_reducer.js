const gameReducer = function(state={game: {}}, action){
  switch(action.type){
    case 'ADD_PLAYERS':
      return Object.assign({}, state, action.players);
    case 'BEGIN_GAME':
      return state;
    default:
      return state;
  }
}

export default gameReducer;

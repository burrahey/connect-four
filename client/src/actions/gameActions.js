import fetch from "isomorphic-fetch";

export const addPlayers = (players) => {
   return {type: "ADD_PLAYERS", players};
 }

export const updateBoard = (column, player) => {
  return {type: "UPDATE_BOARD", column: column, player: player}
}

export const saveGame = (winner, gameState, player1, player2) => {
  if(winner === 1){
    winner = player1;
  } else if(winner === 2){
    winner = player2;
  } else {
    winner = "Tie Game";
  }

  fetch('/api/games', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({ winner: winner, state: gameState, player1: player1, player2: player2 })
  })
  return {type: "SAVE_GAME"}
}

export const pullGame = (id) => {
  return (dispatch) => {
    return fetch(`/api/games/${id}`)
      .then(response => response.json())
      .then(game => dispatch({ type: 'LOAD_EXISTING_GAME', game: game }));
  };
}

export const resetGame = () => {
  return {type: "RESET_GAME"};
}

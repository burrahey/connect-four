import fetch from "isomorphic-fetch";

export const addPlayers = (players) => {
   return {type: "ADD_PLAYERS", players};
 }

export const updateBoard = (column, player) => {
  return {type: "UPDATE_BOARD", column: column, player: player}
}

export const saveGame = (gameOver, gameState) => {
  debugger;
  fetch('/api/games', {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  body: JSON.stringify({ winner: gameOver, state: gameState })
  })
  .then( (response) => {
  console.log(response)
  debugger;
});

  return {type: "SAVE_GAME"}
}

import fetch from "isomorphic-fetch";

export const addPlayers = (players) => {
   return {type: "ADD_PLAYERS", players};
 }

export const updateBoard = (column, player) => {
  return {type: "UPDATE_BOARD", column: column, player: player}
}

export const saveGame = (winner, gameState) => {
  fetch('/api/games', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({ winner: winner, state: gameState })
  })
  return {type: "SAVE_GAME"}
}

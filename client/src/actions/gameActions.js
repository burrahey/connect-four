import fetch from "isomorphic-fetch";

export const addPlayers = (players) => {
   return {type: "ADD_PLAYERS", players};
 }

export const updateBoard = (column, player) => {
  return {type: "UPDATE_BOARD", column: column, player: player}
}

export const saveGame = (winner) => {

  return {type: "SAVE_GAME"}
}

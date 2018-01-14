import fetch from "isomorphic-fetch";

export const addPlayers = (players) => {
   return {type: "ADD_PLAYERS", players};
 }

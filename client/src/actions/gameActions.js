import fetch from "isomorphic-fetch";

const addPlayers = (players) => {
   return {type: "ADD_PLAYERS", players};
 }

export default addPlayers;

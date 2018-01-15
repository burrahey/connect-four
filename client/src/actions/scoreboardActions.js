import fetch from "isomorphic-fetch";

export const pullScores = () => {
  return (dispatch) => {
    return fetch('/api/games')
      .then(response => response.json())
      .then(scores => dispatch({ type: 'PULL_SCORES', scores: scores }));
  };
}

export const pullGame = (id) => {
  return (dispatch) => {
    return fetch(`/api/games/${id}`)
      .then(response => response.json())
      .then(game => dispatch({ type: 'LOAD_EXISTING_GAME', game: game }));
  };
}

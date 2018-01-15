import fetch from "isomorphic-fetch";

export const pullScores = () => {
  debugger;
  return (dispatch) => {
    dispatch({ type: 'LOADING_SCORES' });
    return fetch('http://localhost:3001/api/games')
      .then(response => response.json())
      .then(scores => dispatch({ type: 'PULL_SCORES', scores }));
  };
}

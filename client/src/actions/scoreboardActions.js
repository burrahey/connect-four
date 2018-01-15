import fetch from "isomorphic-fetch";

export const pullScores = () => {
  return (dispatch) => {
    return fetch('/api/games')
      .then(response => response.json())
      .then(scores => dispatch({ type: 'PULL_SCORES', scores: scores }));
  };
}

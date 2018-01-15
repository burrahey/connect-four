import React from 'react';

const Scores = (props) => {
  let renderedScores = "";
  if(props.scores.length > 0){
    renderedScores = props.scores.map(score => {return <li key={score.id}> {score.winner} </li>})
  } else {
    renderedScores = "No Scores Yet"
  }
  return (
    <ul>
      {renderedScores}
    </ul>
  )
}

export default Scores;

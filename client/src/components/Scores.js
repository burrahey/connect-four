import React from 'react';

const Scores = (props) => {

  let renderedScores = "";
  if(props.scores.length > 0){
    renderedScores = props.scores.map((score, index) => {return <li key={score.id}> Winner: {score.winner} </li>})
  } else {
    renderedScores = "No Scores Yet"
  }
  return (
    <div>
      <ol id="scores">
        {renderedScores}
      </ol>
    </div>
  )
}

export default Scores;

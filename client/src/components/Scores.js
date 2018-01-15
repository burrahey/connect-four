import React from 'react';

const Scores = (props) => {

  let renderedScores = "";
  if(props.scores.length > 0){
    renderedScores = props.scores.map((score) => {return <li id={score.id} key={score.id}> Players: {score.player1} and {score.player2}. Winner: {score.winner} <button id={score.id} onClick={(e) => {props.handleOnClick(e)}}>See Game</button></li>})
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

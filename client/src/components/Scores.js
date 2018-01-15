import React from 'react';
import Moment from 'moment'

const Scores = (props) => {

  let renderedScores = "";
  if(props.scores.length > 0){
    renderedScores = props.scores.map((score) => {return <li id={score.id} key={score.id}> <strong>Players:</strong> {score.player1} and {score.player2}<br /> <strong>Winner:</strong> {score.winner} <br /> <strong>Date Played:</strong>  {Moment.utc(props.created_at).format('MMM D, YYYY')} <br /> <button id={score.id} onClick={(e) => {props.handleOnClick(e)}}>See Game</button></li>})
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

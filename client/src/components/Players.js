import React from 'react';

const Players = (props) => {
  let phrase = "";

  if(props.winner){
    debugger
    if(props.winner === 1){
      phrase = `${props.player1} WON!!!!!!!`
    } else if(props.winner === 2){
      phrase = `${props.player2} WON!!!!!!!`
    } else {
      phrase = "IT'S A TIE"
    }
  } else {
    if(props.turn === 1){
      phrase = `It's ${props.player1}'s turn!`;
    } else {
      phrase = `It's ${props.player2}'s turn!`;
    }
  }

  return (
    <div>
      <h2>{phrase}</h2>
    </div>
  )
}

export default Players;

import React from 'react';

const Players = (props) => {
  let player = ""
  if(props.turn === 1){
    player = props.player1
  } else {
    player = props.player2
  }
  return (
    <div>
      It's {player}'s turn!
    </div>
  )
}

export default Players;

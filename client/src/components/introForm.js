import React from 'react';

const IntroForm = (props) => {
  return (
    <div>
      <p>Enter player names to get started.</p>
      <form onSubmit={(e) => {props.handleOnSubmit(e)}}>
        <label>Player 1: </label>
        <input name="player1" type="text" onChange={(e) => {props.handleOnChange(e)}} value={props.player1}/><br />
        <label>Player 2: </label>
        <input name="player2" type="text" onChange={(e) => {props.handleOnChange(e)}} value={props.player2}/><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default IntroForm;

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Intro extends Component {

  constructor(){
    super()

    this.state={
      player1:"", player2:""
    }
  }

  handleOnChange =(e) => {
  }

  handleOnSubmit =(event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <h1>Welcome to Connect Four.</h1>
      <p>Enter player names to get started.</p>
      <form>
      <label>Player 1 Name</label>
      <input name="player1" type="text" /><br />
      <label>Player 2 Name</label>
      <input name="player2" type="text" /><br />
      <input type="submit" />
      </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {player1: state.player1, player2: state.player1};
// }
//
// export const Intro = connect(mapStateToProps)(Intro);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addPlayers from '../actions/introActions'

export class staticIntro extends Component {

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

const mapStateToProps = (state) => {
  return { player1: state.player1, player2: state.player1 };
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPlayers: addPlayers
  }, dispatch);
};


export const Intro = connect(mapStateToProps, mapDispatchToProps)(staticIntro);

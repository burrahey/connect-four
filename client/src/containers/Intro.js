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
    let newState = {...this.state}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  handleOnSubmit =(event) => {
    event.preventDefault();
    debugger;
  }

  render() {
    return (
      <div>
        <h1>Welcome to Connect Four.</h1>
        <p>Enter player names to get started.</p>
        <form onSubmit={this.handleOnSubmit}>
          <label>Player 1 Name</label>
          <input name="player1" type="text" onChange={this.handleOnChange} value={this.props.player1}/><br />
          <label>Player 2 Name</label>
          <input name="player2" type="text" onChange={this.handleOnChange} value={this.props.player2}/><br />
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

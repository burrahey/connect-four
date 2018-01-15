import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addPlayers, resetGame} from '../actions/gameActions';
import IntroForm from '../components/IntroForm';

class staticIntro extends Component {

  constructor(){
    super();

    this.state={
      player1:"", player2:""
    }
  }

  componentWillMount() {
    this.props.resetGame();
  }

  handleOnChange =(event) => {
    let newState = {...this.state}
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleOnSubmit =(event) => {
    event.preventDefault();
    const { addPlayers, history } = this.props;
    addPlayers(this.state)
    history.push('/game')
  }

  render() {
    return (
      <div>
        <h1>Welcome to Connect Four.</h1>
        <IntroForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} player1={this.state.player1} player2={this.state.player2} />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPlayers: addPlayers,
    resetGame: resetGame
  }, dispatch);
};


export const Intro = connect(null, mapDispatchToProps)(staticIntro);

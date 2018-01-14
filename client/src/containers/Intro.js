import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import addPlayers from '../actions/introActions'
import IntroFrom from '../components/introForm'

export class staticIntro extends Component {

  constructor(){
    super()

    this.state={
      player1:"", player2:""
    }
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
        <IntroFrom handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} player1={this.state.player1} player2={this.state.player2} />
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

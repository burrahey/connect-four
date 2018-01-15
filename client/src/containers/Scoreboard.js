import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullScores } from '../actions/scoreboardActions'
import { pullGame } from '../actions/gameActions'
import Scores from '../components/Scores';

class staticScoreboard extends Component {

  componentWillMount() {
    this.props.pullScores();
  }

  handleOnClick = (e) => {
    this.props.pullGame(e.target.id);
    this.props.history.push('/game')
  }

  render() {
    return (
      <div>
        <Scores scores={this.props.scores} handleOnClick={this.handleOnClick}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {scores: state.scores.scores};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pullScores: pullScores,
    pullGame: pullGame
  }, dispatch);
};

export const Scoreboard = connect(mapStateToProps, mapDispatchToProps)(staticScoreboard);

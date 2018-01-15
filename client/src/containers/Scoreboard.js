import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullScores } from '../actions/scoreboardActions'
import Scores from '../components/Scores';

class staticScoreboard extends Component {

  componentWillMount() {
    this.props.pullScores();
  }

  render() {
    debugger;
    return (
      <div>
        <Scores scores={this.props.scores}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {scores: state.scores};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pullScores: pullScores
  }, dispatch);
};

export const Scoreboard = connect(mapStateToProps, mapDispatchToProps)(staticScoreboard);

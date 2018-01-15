import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pullScores } from '../actions/scoreboardActions'

class staticScoreboard extends Component {

  componentDidMount() {
    this.props.pullScores();
  }

  render() {
    return (
      <div>
        Scores baby
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {scores: state.scores};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    pullScores: pullScores
  }, dispatch);
};

export const Scoreboard = connect(mapStateToProps, mapDispatchToProps)(staticScoreboard);

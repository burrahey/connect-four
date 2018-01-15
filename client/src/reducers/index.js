import { combineReducers } from 'redux';
import gameReducer from './game_reducer';
import scoreReducer from './score_reducer';

const rootReducer = combineReducers({
  game: gameReducer, scores: scoreReducer
});

export default rootReducer;

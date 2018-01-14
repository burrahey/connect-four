import { combineReducers } from 'redux';
import introReducer from './intro_reducer';

const rootReducer = combineReducers({
  intro: introReducer
});

export default rootReducer;

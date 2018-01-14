import { combineReducers } from 'redux';
import introReducer from './intro_reducer';

export default combineReducers({
  intro: introReducer
});
